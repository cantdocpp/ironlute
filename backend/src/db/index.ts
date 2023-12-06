import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../schema";

const dbUsername = process.env.DB_USERNAME || "postgres";
const dbPassword = process.env.DB_PASSWORD || "postgres";
const dbName = process.env.DB_NAME || "ironlute";
const dbHost = process.env.DB_HOST || "127.0.0.1";
const dbPort = process.env.DB_PORT;

const queryClient = postgres(
  `postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
);
const db = drizzle(queryClient, { schema });

export { db, queryClient };
