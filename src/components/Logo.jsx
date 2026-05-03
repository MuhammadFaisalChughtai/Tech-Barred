import React from "react";

/**
 * TechBarred logo — Shield mark + bold wordmark.
 * Props:
 *   size   — controls the base height scale
 *   dark   — if true, renders white text (for dark backgrounds)
 *   markOnly — only render the shield mark, no wordmark
 */
export default function Logo({ size = 32, dark = false, markOnly = false }) {
  const fill = dark ? "#ffffff" : "#111111";
  
  // The shield looks best slightly larger than the base text size
  const markSize = size * 1.6;

  const mark = (
    <img
      src="/logo 2.png"
      alt="TechBarred Shield"
      style={{
        height: markSize,
        width: "auto",
        display: "block",
        objectFit: "contain",
        // In case the image has a background that needs blending on light themes
        mixBlendMode: dark ? "normal" : "multiply", 
      }}
    />
  );

  if (markOnly) return mark;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: Math.round(size * 0.4),
        textDecoration: "none",
      }}
    >
      {mark}
      <span
        style={{
          fontFamily: '"Geist", system-ui, sans-serif',
          fontWeight: 900,
          fontSize: Math.round(size * 0.65),
          letterSpacing: "0.10em",
          color: fill,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        TECHBARRED
      </span>
    </span>
  );
}
