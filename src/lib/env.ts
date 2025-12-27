/**
 * Environment variable validation
 * Throws errors at build/runtime if required env vars are missing
 */

const requiredEnvVars = {
  EMAIL_TO: process.env.EMAIL_TO,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
} as const;

const optionalEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

export function validateEnv() {
  const missing: string[] = [];

  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) {
      missing.push(key);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

// Validate on module load (server-side only)
if (typeof window === 'undefined') {
  // Only validate in production or if explicitly enabled
  if (process.env.NODE_ENV === 'production' || process.env.VALIDATE_ENV === 'true') {
    validateEnv();
  }
}

export const env = {
  ...requiredEnvVars,
  ...optionalEnvVars,
  NODE_ENV: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
} as const;

