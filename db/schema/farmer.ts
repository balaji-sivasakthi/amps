import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const farmersTable = sqliteTable('farmers', {
  id: text().primaryKey(),
  farmer_id: int().notNull().unique(),
  name: text().notNull(),
  mobile: text().notNull(),
  account_id: text(),
  address_id: text(),
  created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});
