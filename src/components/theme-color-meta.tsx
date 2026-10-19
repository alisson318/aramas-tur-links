"use client";

import { useEffect } from "react";

const BRAND_THEME_COLOR = "#00518f";

export function ThemeColorMeta() {
  useEffect(() => {
    let meta = document.head.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"][data-managed="theme-color-meta"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.setAttribute("data-managed", "theme-color-meta");
      document.head.appendChild(meta);
    }

    meta.content = BRAND_THEME_COLOR;
  }, []);

  return null;
}
