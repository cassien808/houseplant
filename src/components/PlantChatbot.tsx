import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/plant-chat`;

const PlantChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong" }));
        upsertAssistant(`⚠️ ${err.error || "Something went wrong. Please try again."}`);
        setIsLoading(false);
        return;
      }

      const reader = resp.body?.getReader();
      if (!reader) throw new Error("No stream");
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) upsertAssistant(content);
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      upsertAssistant("⚠️ Could not connect to the coach. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow-gold flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
        aria-label="Open plant coach chat"
      >
        {open ? "✕" : "🌱"}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-card border border-border rounded-2xl shadow-card flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-blue px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <h3 className="text-primary-foreground font-bold text-sm leading-tight">Plant Coach</h3>
                <p className="text-sky-blue text-xs">Ask about any plant persona</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm py-8">
                  <p className="text-3xl mb-2">🪴</p>
                  <p className="font-medium">Hi! I'm your Plant Coach.</p>
                  <p className="mt-1 text-xs">
                    Describe a team member's behavior and I'll help you identify their plant persona and how to support them.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] ${msg.role === "user" ? "" : ""}`}>
                    <div
                      className={`rounded-xl px-3 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-sm max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-2 [&_ul]:pl-4 [&_ol]:my-2 [&_ol]:pl-4 [&_li]:my-1 [&_li]:marker:text-accent [&_strong]:text-foreground [&_h3]:text-sm [&_h3]:font-bold [&_h3]:mt-3 [&_h3]:mb-1">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                    {msg.role === "assistant" && !isLoading && (
                      <button
                        onClick={() => {
                          const subject = encodeURIComponent("Plant Coach Recommendation");
                          const body = encodeURIComponent(msg.content);
                          window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
                        }}
                        className="mt-1 ml-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        title="Email this recommendation"
                      >
                        📧 Email this
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-xl px-3 py-2 text-sm text-muted-foreground animate-pulse">
                    Thinking…
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border px-3 py-2 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Describe a team member…"
                className="flex-1 bg-background border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                disabled={isLoading}
              />
              <button
                onClick={send}
                disabled={isLoading || !input.trim()}
                className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium disabled:opacity-50 hover:bg-primary/90 transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlantChatbot;
