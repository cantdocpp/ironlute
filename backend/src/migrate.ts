import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, queryClient } from "./db";

async function runMigration() {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "src/drizzle/migrations" });

  // Don't forget to close the connection, otherwise the script will hang
  await queryClient.end();
}

runMigration();
