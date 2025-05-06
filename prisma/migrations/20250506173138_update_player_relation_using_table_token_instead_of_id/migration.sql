/*
  Warnings:

  - You are about to drop the column `tableId` on the `players` table. All the data in the column will be lost.
  - Added the required column `tableToken` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_tableId_fkey";

-- AlterTable
ALTER TABLE "players" DROP COLUMN "tableId",
ADD COLUMN     "tableToken" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_tableToken_fkey" FOREIGN KEY ("tableToken") REFERENCES "tables"("token") ON DELETE RESTRICT ON UPDATE CASCADE;
