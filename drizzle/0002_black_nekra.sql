CREATE TABLE `procurements` (
	`id` text PRIMARY KEY NOT NULL,
	`farmer_id` integer NOT NULL,
	`snf` integer NOT NULL,
	`fat` integer NOT NULL,
	`litre` integer NOT NULL,
	`kg` integer NOT NULL,
	`rate_per_litre` text NOT NULL,
	`total_amount` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `rate_charts` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
ALTER TABLE `centers` DROP COLUMN `sync`;