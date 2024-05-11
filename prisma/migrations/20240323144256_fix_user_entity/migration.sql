/*
  Warnings:

  - Added the required column `blocked` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inactivePermanent` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordAttempt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordCreated` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordExpired` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signUpDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signUpFrom` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ENUM_USER_SIGN_UP_FROM" AS ENUM ('PUBLIC', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "blocked" BOOLEAN NOT NULL,
ADD COLUMN     "blockedDate" TIMESTAMP(3),
ADD COLUMN     "inactiveDate" TIMESTAMP(3),
ADD COLUMN     "inactivePermanent" BOOLEAN NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "mobileNumber" TEXT,
ADD COLUMN     "passwordAttempt" INTEGER NOT NULL,
ADD COLUMN     "passwordCreated" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "passwordExpired" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL,
ADD COLUMN     "signUpDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "signUpFrom" "ENUM_USER_SIGN_UP_FROM" NOT NULL;
