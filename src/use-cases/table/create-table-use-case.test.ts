import { beforeEach, describe, expect, it } from "vitest";

import { InMemoryPlayersRepository } from "@/repositories/in-memory/in-memory-players-repository";
import { InMemoryTablesRepository } from "@/repositories/in-memory/in-memory-tables-repository";
import { PlayersRepository } from "@/repositories/players-repository";
import { TablesRepository } from "@/repositories/tables-repository";

import { CreateTableUseCase } from "./create-table-use-case";

let tableRepository: TablesRepository;
let playersRepository: PlayersRepository;
let sut: CreateTableUseCase;

describe("CreateTableUseCase", () => {
  beforeEach(() => {
    tableRepository = new InMemoryTablesRepository();
    playersRepository = new InMemoryPlayersRepository(tableRepository);
    sut = new CreateTableUseCase(tableRepository, playersRepository);
  });

  it("should create a table and an owner", async () => {
    const { table } = await sut.execute({
      ownerName: "John Doe",
      tableName: "Typescript Poker",
    });

    expect(table.players).toHaveLength(1);
    expect(table.tableName).toEqual("Typescript Poker");
    expect(table.players![0].isOwner).toBe(true);
    expect(table.players![0].name).toBe("John Doe");
    expect(table.id).toBeDefined();
    expect(table.token).toBeDefined();
  });
});
