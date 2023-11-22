import { PrismaClient } from "@prisma/client";

const prismaSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaSingleton();

if (process.env.NODE_ENV === "production") globalForPrisma.prisma = prisma;
