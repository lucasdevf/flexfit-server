-- CreateTable
CREATE TABLE "images_history" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "images_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images_history" ADD CONSTRAINT "images_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
