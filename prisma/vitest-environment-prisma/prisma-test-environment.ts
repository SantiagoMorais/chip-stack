import "dotenv/config";

import { execSync } from "child_process";
import { randomUUID } from "crypto";
import type { Environment } from "vitest/environments";

import { db } from "@/db";

const generateDatabaseUrl = (schema: string) => {
  if (!process.env.DATABASE_URL)
    throw new Error("Please provide a DATABASE_URL env variable");

  const url = new URL(process.env.DATABASE_URL);

  url.searchParams.set("schema", schema);

  return url.toString();
};

export default <Environment>{
  name: "prisma",
  transformMode: "ssr",

  async setup() {
    // To create the tests db
    const schema = randomUUID();
    const databaseUrl = generateDatabaseUrl(schema);

    process.env.DATABASE_URL = databaseUrl;

    execSync("npx prisma migrate deploy");

    return {
      async teardown() {
        // To delete the test database
        await db.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);

        await db.$disconnect();
      },
    };
  },
};
