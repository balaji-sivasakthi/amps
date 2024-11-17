CREATE TABLE `farmers` (
	`id` text PRIMARY KEY NOT NULL,
	`farmer_id` integer NOT NULL,
	`name` text NOT NULL,
	`mobile` text NOT NULL,
	`account_id` text,
	`address_id` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `farmers_farmer_id_unique` ON `farmers` (`farmer_id`);--> statement-breakpoint
DROP TABLE `users_table`;