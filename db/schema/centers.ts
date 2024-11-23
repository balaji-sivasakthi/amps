import { sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const centersTable = table('centers', {
  id: t.int().primaryKey({ autoIncrement: true }),
  center_id: t.int().notNull().unique(),
  name: t.text().notNull(),
  mobile: t.text().notNull(),
  sync: t.int().notNull().default(0),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});
