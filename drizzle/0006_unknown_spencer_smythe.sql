PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_rate_charts` (
	`id` text PRIMARY KEY NOT NULL,
	`range_from` integer NOT NULL,
	`range_to` integer NOT NULL,
	`rate` integer NOT NULL,
	`commision` integer DEFAULT 0,
	`bonus` integer DEFAULT 0,
	`cowType` text DEFAULT 'cow' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_rate_charts`("id", "range_from", "range_to", "rate", "commision", "bonus", "cowType", "created_at", "updated_at") SELECT "id", "range_from", "range_to", "rate", "commision", "bonus", "cowType", "created_at", "updated_at" FROM `rate_charts`;--> statement-breakpoint
DROP TABLE `rate_charts`;--> statement-breakpoint
ALTER TABLE `__new_rate_charts` RENAME TO `rate_charts`;--> statement-breakpoint
PRAGMA foreign_keys=ON;