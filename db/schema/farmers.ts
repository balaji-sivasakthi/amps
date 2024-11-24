import { sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const farmersTable = table('farmers', {
  farmer_id: t.int().notNull().primaryKey({ autoIncrement: true }),
  id: t.text().notNull().unique(),
  name: t.text().notNull(),
  mobile: t.text().notNull(),
  city: t.text().notNull(),
  street: t.text().notNull(),
  bank_name: t.text().notNull(),
  account_no: t.text().notNull(),
  branch: t.text().notNull(),
  ifsc: t.text().notNull(),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});
