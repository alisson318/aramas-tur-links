"use client";

import { useEffect } from "react";

export function CleanUrl() {
  useEffect(() => {
    if (!window.location.search) return;

    const { pathname, hash } = window.location;
    window.history.replaceState(null, "", `${pathname}${hash}`);
  }, []);

  return null;
}
