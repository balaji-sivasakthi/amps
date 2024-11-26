import { sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const rateChartsTable = table('rate_charts', {
  id: t.text().notNull().primaryKey(),
  range_from: t.int().notNull(),
  range_to: t.int().notNull(),
  rate: t.int().notNull(),
  commision: t.int().default(0),
  bonus: t.int().default(0),
  cowType: t.text().$type<'cow' | 'buff'>().default('cow').notNull(),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});
