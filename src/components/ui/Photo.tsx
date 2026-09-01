import Image from "next/image";
import { PlusMark } from "./PlusMark";

type PhotoProps = {
  src: string;
  alt: string;
  label?: string;
  labelPosition?: "bottom-left" | "top-left";
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Real photography (currently licensed stock, standing in until RH+'s own
 * photos are supplied) with the site's signature caption plate overlay.
 */
export function Photo({
  src,
  alt,
  label,
  labelPosition = "bottom-left",
  className,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority,
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-petrol-800 ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/70 via-transparent to-transparent" />
      {label ? (
        <div
          className={`absolute flex items-center gap-1.5 rounded-full bg-petrol-950/70 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm ${
            labelPosition === "top-left" ? "top-3 left-3 sm:top-4 sm:left-4" : "bottom-3 left-3 sm:bottom-4 sm:left-4"
          }`}
        >
          <PlusMark size={9} />
          <span>{label}</span>
        </div>
      ) : null}
    </div>
  );
}
