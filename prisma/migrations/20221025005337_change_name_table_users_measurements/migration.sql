/*
  Warnings:

  - You are about to drop the `UsersMeasurements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersMeasurements" DROP CONSTRAINT "UsersMeasurements_user_id_fkey";

-- DropTable
DROP TABLE "UsersMeasurements";

-- CreateTable
CREATE TABLE "users_measurements" (
    "id" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_measurements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_measurements" ADD CONSTRAINT "users_measurements_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
