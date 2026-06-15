import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

type LightboxState = { src: string; alt: string } | null;

let openLightboxRef: ((s: LightboxState) => void) | null = null;

export function openLightbox(src: string, alt: string) {
  openLightboxRef?.({ src, alt });
}

/** Mount once at the app root. Listens for openLightbox() calls. */
export function LightboxRoot() {
  const [state, setState] = useState<LightboxState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    openLightboxRef = setState;
    return () => {
      openLightboxRef = null;
    };
  }, []);

  const close = useCallback(() => setState(null), []);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [state, close]);

  if (!mounted || !state) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={state.alt || "Image preview"}
      onClick={close}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-12 cursor-zoom-out"
      style={{
        background: "color-mix(in oklab, var(--ink) 82%, var(--turquoise-deep) 18%)",
        backdropFilter: "blur(20px) saturate(150%)",
        animation: "lb-fade 220ms cubic-bezier(.2,.7,.2,1)",
      }}
    >
      {/* top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, var(--turquoise), var(--coral))" }}
      />

      {/* caption */}
      {state.alt && (
        <p
          className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.22em] text-center pointer-events-none select-none"
          style={{ color: "var(--turquoise)" }}
        >
          {state.alt}
        </p>
      )}

      {/* close button */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); close(); }}
        aria-label="Close image preview"
        className="absolute top-4 right-5 md:top-5 md:right-7 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          background: "var(--turquoise)",
          color: "var(--paper)",
          boxShadow: "0 2px 12px color-mix(in oklab, var(--turquoise) 50%, transparent)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 2 L12 12 M12 2 L2 12" />
        </svg>
      </button>

      {/* image */}
      <img
        src={state.src}
        alt={state.alt}
        onClick={(e) => e.stopPropagation()}
        className="block max-w-[min(1400px,92vw)] max-h-[82vh] w-auto h-auto cursor-default select-none"
        style={{
          boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px color-mix(in oklab, var(--turquoise) 20%, transparent)",
          animation: "lb-pop 280ms cubic-bezier(.2,.7,.2,1)",
          borderRadius: "2px",
        }}
      />

      {/* hint */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.18em] pointer-events-none select-none opacity-40"
        style={{ color: "var(--paper)" }}>
        ESC to close
      </p>

      <style>{`
        @keyframes lb-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-pop  { from { opacity: 0; transform: scale(.96) translateY(8px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      `}</style>
    </div>,
    document.body,
  );
}

/** Drop-in <img> replacement that opens the global lightbox on click. */
export function ZoomableImage({
  src,
  alt,
  className = "",
  style,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onClick={() => openLightbox(src, alt)}
      className={`cursor-zoom-in transition-[transform,filter] duration-500 hover:brightness-[1.02] ${className}`}
      style={style}
    />
  );
}