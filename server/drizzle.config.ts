/**
 * Node imports
 */
import 'dotenv/config';

import { defineConfig } from 'drizzle-kit'


export default defineConfig({
  out: '@/drizzle',
  schema: '@/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: (globalThis as typeof globalThis & { process: { env: Record<string, string | undefined> } }).process.env.DATABASE_URL!,
  },
});
