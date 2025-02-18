import { PrismaClient } from "@prisma/client";

let prisma;

try {
  prisma = new PrismaClient();
} catch (error) {
  console.error("Error initializing Prisma Client:", error);
  process.exit(1);
}

export default prisma;
