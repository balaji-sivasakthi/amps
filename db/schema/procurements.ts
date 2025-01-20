import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';
import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const procurementsTable = table('procurements', {
  id: t.text().notNull().primaryKey(),
  farmer_id: t.int().notNull(),
  snf: t.int().notNull(),
  fat: t.int().notNull(),
  litre: t.int().notNull(),
  kg: t.int().notNull(),
  rate_per_litre: t.text().notNull(),
  total_amount: t.text().notNull(),
  created_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
  updated_at: t.text().default(sql`(CURRENT_TIMESTAMP)`),
});

export type Procurement = InferInsertModel<typeof procurementsTable>;
export type ProcurementResult = InferSelectModel<typeof procurementsTable>;
