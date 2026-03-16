const PlantIcon = ({ className = "w-32 h-32" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pot */}
    <path
      d="M60 130 L65 175 L135 175 L140 130 Z"
      fill="hsl(20, 60%, 45%)"
      stroke="hsl(20, 50%, 35%)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Pot rim */}
    <rect x="55" y="125" width="90" height="12" rx="3" fill="hsl(20, 55%, 50%)" stroke="hsl(20, 50%, 35%)" strokeWidth="2" />
    {/* Soil */}
    <ellipse cx="100" cy="130" rx="38" ry="6" fill="hsl(30, 40%, 30%)" />
    {/* Main stem */}
    <path d="M100 130 Q100 90 95 70" stroke="hsl(140, 50%, 35%)" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Left leaf */}
    <path
      d="M95 90 Q60 60 50 40 Q70 35 95 70"
      fill="hsl(140, 60%, 45%)"
      stroke="hsl(140, 50%, 35%)"
      strokeWidth="1.5"
    />
    {/* Right leaf */}
    <path
      d="M98 80 Q130 50 145 35 Q130 30 100 65"
      fill="hsl(140, 55%, 50%)"
      stroke="hsl(140, 50%, 35%)"
      strokeWidth="1.5"
    />
    {/* Top leaf */}
    <path
      d="M95 70 Q85 30 100 15 Q115 30 105 70"
      fill="hsl(140, 65%, 40%)"
      stroke="hsl(140, 50%, 35%)"
      strokeWidth="1.5"
    />
    {/* Small left leaf */}
    <path
      d="M97 105 Q70 95 55 80 Q72 78 97 95"
      fill="hsl(140, 55%, 48%)"
      stroke="hsl(140, 50%, 35%)"
      strokeWidth="1"
    />
  </svg>
);

export default PlantIcon;
