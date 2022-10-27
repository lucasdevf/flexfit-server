-- DropForeignKey
ALTER TABLE "images_history" DROP CONSTRAINT "images_history_userId_fkey";

-- AddForeignKey
ALTER TABLE "images_history" ADD CONSTRAINT "images_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
