type PlusMarkProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/**
 * Registration-mark style "+" — a quiet nod to the RH+ mark, used as a
 * recurring signature detail (corners, dividers, labels), never as a logo.
 */
export function PlusMark({ size = 14, className, strokeWidth = 1.4 }: PlusMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 0.5V13.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M0.5 7H13.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
