-- DropForeignKey
ALTER TABLE `childs` DROP FOREIGN KEY `childs_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `diagnosa` DROP FOREIGN KEY `diagnosa_child_id_fkey`;

-- AddForeignKey
ALTER TABLE `childs` ADD CONSTRAINT `childs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diagnosa` ADD CONSTRAINT `diagnosa_child_id_fkey` FOREIGN KEY (`child_id`) REFERENCES `childs`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
