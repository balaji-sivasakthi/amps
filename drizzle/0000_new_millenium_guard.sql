CREATE TABLE `centers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`center_id` integer NOT NULL,
	`name` text NOT NULL,
	`mobile` text NOT NULL,
	`sync` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `centers_center_id_unique` ON `centers` (`center_id`);--> statement-breakpoint
CREATE TABLE `farmers` (
	`farmer_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`id` text NOT NULL,
	`name` text NOT NULL,
	`mobile` text NOT NULL,
	`sync` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `farmers_id_unique` ON `farmers` (`id`);