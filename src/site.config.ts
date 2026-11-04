/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 * This is the ONLY file you need to edit to customize the site for your own use.
 * All branding, personal info, social links, and site metadata are defined here.
 *
 * After editing this file, restart the dev server to see changes.
 * ============================================================================
 */

export const siteConfig = {
  /** Site name used in metadata, logo, and branding */
  name: "Aramas Tur",

  /** Tagline shown alongside name */
  tagline: "Viagens",

  /** Your role/title shown in profile cards and footer */
  role: "Agência de turismo",

  /** Short bio shown on the home page profile card */
  bio: "A Aramas proporciona as melhores experiências de viagem, com passagens, roteiros e atendimento para você explorar cada destino com tranquilidade.",

  /** Agency mark shown in the profile card (place a logo in /public) */
  avatar: "/aramas-logo.svg",

  /** Initials used as avatar fallback */
  initials: "AR",

  /** Site metadata for SEO */
  metadata: {
    title: {
      template: "%s - Aramas",
      default: "Aramas",
    },
    description:
      "Aramas, agência de turismo. As melhores experiências de viagem, passagens e roteiros.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
