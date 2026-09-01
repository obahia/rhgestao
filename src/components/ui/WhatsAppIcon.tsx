export function WhatsAppIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17.3 6.7a7.8 7.8 0 0 0-12.2 9.4L4 21l5.1-1.3a7.8 7.8 0 0 0 11.4-6.9c0-2.1-.8-4-2.2-5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 9.3c.2-.6.6-.6 1-.6h.4c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.2 1.6 1.9 1.1 1 2 1.2 2.3 1.4.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.2.4.3.1.4.1.8-.1 1.2-.2.5-1.1.9-1.5 1-.4.1-.9.1-2.7-.6-2.3-.9-3.8-3.2-3.9-3.4-.1-.1-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
