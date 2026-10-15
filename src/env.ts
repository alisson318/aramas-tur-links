/**
 * Server env validation is intentionally bypassed.
 * This project is a static site and no longer requires backend variables
 * (DATABASE_URL, S3_*, BETTER_AUTH_*) at build time.
 * Kept as a no-op so existing imports (e.g. src/db/index.ts) still work.
 */
export function validateServerEnv() {
  return process.env as any;
}
