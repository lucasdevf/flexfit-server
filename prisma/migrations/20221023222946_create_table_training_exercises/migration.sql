-- CreateTable
CREATE TABLE "trainings_exercises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "training_id" TEXT NOT NULL,

    CONSTRAINT "trainings_exercises_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trainings_exercises" ADD CONSTRAINT "trainings_exercises_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
