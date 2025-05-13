import { env } from "@/env";
import { PrismaClient } from "@/generated/client";

export const db = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query"] : [],
});
