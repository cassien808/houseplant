const TshirtIcon = ({ className = "w-32 h-32" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M72 20 L58 24 L15 40 L30 80 L50 72 L50 175 L150 175 L150 72 L170 80 L185 40 L142 24 L128 20 Q120 45 100 45 Q80 45 72 20 Z"
      fill="hsl(46, 94%, 63%)"
      stroke="hsl(40, 80%, 48%)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default TshirtIcon;
