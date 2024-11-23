import { sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const farmersTable = table('farmers', {
  farmer_id: t.int().notNull().primaryKey({ autoIncrement: true }),
  id: t.text().notNull().unique(),
  name: t.text().notNull(),
  mobile: t.text().notNull(),
  sync: t.int().notNull().default(0),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});
