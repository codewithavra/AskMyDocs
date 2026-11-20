/**
 * Node Imports
 */
import { drizzle } from 'drizzle-orm/neon-http';

/**
 * Other Imports
 */
import { env } from '@/config/env.js';

const databaseUrl = env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error('DATABASE_URL is required');
}

const db = drizzle(databaseUrl);


export default db
