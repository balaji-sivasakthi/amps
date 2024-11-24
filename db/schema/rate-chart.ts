import { sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const rateChartsTable = table('rate_charts', {
  id: t.text().notNull().primaryKey(),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});
