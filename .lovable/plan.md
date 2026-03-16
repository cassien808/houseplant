

## Plan: Add "Email Recommendations" to Plant Coach Chatbot

### What it does
After each assistant response, a small **📧 Email this** button appears below the message. Clicking it opens a simple email input modal/inline form. The user enters their email, and a new Edge Function sends the recommendation text to that address.

### Implementation

**1. New Edge Function: `supabase/functions/send-recommendation/index.ts`**
- Accepts `{ email, recommendation }` in the request body
- Uses the Lovable AI gateway to format the recommendation into a clean HTML email (or we can do simple HTML formatting directly)
- Sends the email via the Lovable email infrastructure
- Requires email domain setup first

**2. Update `PlantChatbot.tsx`**
- Add a small "📧 Email this" button below each assistant message bubble
- On click, show an inline email input field with a Send button
- Calls the new Edge Function with the email and the message content
- Shows a toast on success/failure

**3. Email Infrastructure Prerequisite**
- Email sending requires a configured email domain. We'll need to check if one exists and set it up if not.

### Alternative: No email domain needed
Instead of server-side email, we can use a `mailto:` link that opens the user's default email client pre-filled with the recommendation text. This requires **zero backend changes** and works immediately.

### Recommendation
The `mailto:` approach is simpler and doesn't require email domain setup. The server-side approach gives a more polished experience but requires additional infrastructure.

I'd suggest we go with one of these approaches — which would you prefer?

