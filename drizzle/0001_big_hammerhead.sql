ALTER TABLE `farmers` ADD `city` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` ADD `street` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` ADD `bank_name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` ADD `account_no` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` ADD `branch` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` ADD `ifsc` text NOT NULL;--> statement-breakpoint
ALTER TABLE `farmers` DROP COLUMN `sync`;