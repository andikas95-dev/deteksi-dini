-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `childs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nama_anak` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gejala` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gejala_id` VARCHAR(191) NOT NULL,
    `nama_gejala` VARCHAR(191) NOT NULL,
    `cf_pakar` DOUBLE NOT NULL,
    `isDisabled` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `gejala_gejala_id_key`(`gejala_id`),
    INDEX `gejala_id`(`gejala_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `diagnosa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `child_id` INTEGER NOT NULL,
    `cf_result` DOUBLE NOT NULL DEFAULT 0,
    `cf_result_percentage` DOUBLE NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_diagnosa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diagnosa_id` INTEGER NOT NULL,
    `gejala_id` VARCHAR(191) NOT NULL,
    `cf_pakar` DOUBLE NOT NULL,
    `cf_user` DOUBLE NOT NULL,
    `cf_combined` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `childs` ADD CONSTRAINT `childs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diagnosa` ADD CONSTRAINT `diagnosa_child_id_fkey` FOREIGN KEY (`child_id`) REFERENCES `childs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_diagnosa` ADD CONSTRAINT `detail_diagnosa_diagnosa_id_fkey` FOREIGN KEY (`diagnosa_id`) REFERENCES `diagnosa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_diagnosa` ADD CONSTRAINT `detail_diagnosa_gejala_id_fkey` FOREIGN KEY (`gejala_id`) REFERENCES `gejala`(`gejala_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
