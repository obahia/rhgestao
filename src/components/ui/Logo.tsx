import Image from "next/image";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({ tone = "dark", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
        isLight ? "bg-white p-1.5" : ""
      } ${className ?? ""}`}
    >
      <Image
        src="/logo.png"
        alt="Grupo RH+ Gestão Ocupacional"
        width={150}
        height={150}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
