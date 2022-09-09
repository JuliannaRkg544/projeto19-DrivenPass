-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "lable" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
