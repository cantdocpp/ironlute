import {
  serial,
  text,
  pgTable,
  boolean,
  timestamp,
  smallint,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username"),
  email: text("email"),
  password: text("password"),
  isVerified: boolean("is_verified"),
  verifiedAt: timestamp("verified_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  role: smallint("role").default(1),
  lastLoggedIn: timestamp("last_logged_in").defaultNow(),
});
