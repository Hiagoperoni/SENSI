/*
  Warnings:

  - You are about to drop the column `cliente_id` on the `configfreezer` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `freezerapi` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `logsfreezer` table. All the data in the column will be lost.
  - Added the required column `num_cliente` to the `configfreezer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_cliente` to the `freezerapi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_cliente` to the `logsfreezer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_cliente` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qnt_freezers` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `configfreezer` DROP FOREIGN KEY `cliente_id`;

-- DropIndex
DROP INDEX `cliente_id_idx` ON `freezerapi`;

-- AlterTable
ALTER TABLE `configfreezer` DROP COLUMN `cliente_id`,
    ADD COLUMN `num_cliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `freezerapi` DROP COLUMN `cliente_id`,
    ADD COLUMN `num_cliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `logsfreezer` DROP COLUMN `cliente_id`,
    ADD COLUMN `num_cliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `num_cliente` INTEGER NOT NULL,
    ADD COLUMN `qnt_freezers` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `cliente_id_idx` ON `freezerapi`(`num_cliente`);
