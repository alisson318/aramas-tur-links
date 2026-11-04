import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string) {
  return /^https?:\/\/\S+$/.test(url);
}

export function getExternalLinkProps(href: string) {
  return isValidUrl(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
