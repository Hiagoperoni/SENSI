-- CreateTable
CREATE TABLE `freezerapi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `freezer_id` INTEGER NOT NULL,
    `temp_atual` DECIMAL(10, 0) NOT NULL,
    `status_porta` VARCHAR(45) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `cliente_id_idx`(`cliente_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `configfreezer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `freezer_id` INTEGER NOT NULL,
    `temp_padrao` INTEGER NOT NULL,
    `temp_min` INTEGER NOT NULL,
    `temp_max` INTEGER NOT NULL,
    `porta_tempo` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `cliente_id_idx`(`cliente_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(127) NOT NULL,
    `password` VARCHAR(127) NOT NULL,
    `isAvailable` TINYINT NULL DEFAULT 1,

    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logsfreezer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `freezer_id` INTEGER NOT NULL,
    `temp_atual` DECIMAL(10, 0) NOT NULL,
    `temp_padrao` DECIMAL(10, 0) NOT NULL,
    `temp_min` INTEGER NOT NULL,
    `temp_max` INTEGER NOT NULL,
    `porta_tempo` DECIMAL(10, 0) NOT NULL,
    `porta_status` VARCHAR(45) NOT NULL,
    `Erro` VARCHAR(45) NULL DEFAULT 'none',
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `configfreezer` ADD CONSTRAINT `cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `users`(`cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
