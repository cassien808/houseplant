const TshirtIcon = ({ className = "w-32 h-32" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Sleeves and shoulders */}
    <path
      d="M20 15 L45 10 L50 35 L38 38 L35 25 L35 95 L85 95 L85 25 L82 38 L70 35 L75 10 L100 15 L110 45 L95 50 L88 30 L88 105 L32 105 L32 30 L25 50 L10 45 Z"
      fill="hsl(46, 94%, 63%)"
      stroke="hsl(46, 80%, 50%)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Collar */}
    <path
      d="M45 10 Q60 20 75 10"
      fill="none"
      stroke="hsl(46, 80%, 50%)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default TshirtIcon;
