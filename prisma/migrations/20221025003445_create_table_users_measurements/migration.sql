-- CreateTable
CREATE TABLE "UsersMeasurements" (
    "id" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersMeasurements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersMeasurements" ADD CONSTRAINT "UsersMeasurements_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
