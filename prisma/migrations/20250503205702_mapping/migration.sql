/*
  Warnings:

  - You are about to drop the `AIModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conversation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_model_id_fkey";

-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_conversation_id_fkey";

-- DropTable
DROP TABLE "AIModel";

-- DropTable
DROP TABLE "Conversation";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "external_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "model_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "conversation_id" TEXT NOT NULL,
    "sender" "MessageSender" NOT NULL,
    "content" TEXT,
    "image_url" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_model" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "ai_model_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_external_id_key" ON "user"("external_id");

-- CreateIndex
CREATE INDEX "conversation_user_id_idx" ON "conversation"("user_id");

-- CreateIndex
CREATE INDEX "message_conversation_id_idx" ON "message"("conversation_id");

-- CreateIndex
CREATE UNIQUE INDEX "ai_model_name_key" ON "ai_model"("name");

-- AddForeignKey
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "ai_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
