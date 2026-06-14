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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
      style={{
        background: "color-mix(in oklab, #14141a 70%, transparent)",
        backdropFilter: "blur(18px) saturate(140%)",
        animation: "lb-fade 220ms cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        aria-label="Close image preview"
        className="absolute top-5 right-5 md:top-7 md:right-7 h-10 w-10 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-colors"
        style={{
          background: "color-mix(in oklab, #ffffff 14%, transparent)",
          backdropFilter: "blur(12px) saturate(140%)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 3 L13 13 M13 3 L3 13" />
        </svg>
      </button>
      <img
        src={state.src}
        alt={state.alt}
        onClick={(e) => e.stopPropagation()}
        className="block max-w-[min(1400px,94vw)] max-h-[88vh] w-auto h-auto rounded-sm cursor-default select-none"
        style={{
          boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
          animation: "lb-pop 260ms cubic-bezier(.2,.7,.2,1)",
        }}
      />
      <style>{`
        @keyframes lb-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-pop { from { opacity: 0; transform: scale(.985) } to { opacity: 1; transform: scale(1) } }
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