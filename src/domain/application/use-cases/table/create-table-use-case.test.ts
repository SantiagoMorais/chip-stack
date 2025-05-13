import { InMemoryPlayersRepository } from "test/repositories/in-memory-players-repository";
import { InMemoryTablesRepository } from "test/repositories/in-memory-tables-repository";

import { PlayersRepository } from "@/domain/application/repositories/players-repository";
import { TablesRepository } from "@/domain/application/repositories/tables-repository";

import { CreateTableUseCase } from "./create-table-use-case";

let tableRepository: TablesRepository;
let playersRepository: PlayersRepository;
let sut: CreateTableUseCase;

describe("CreateTableUseCase", () => {
  beforeEach(() => {
    tableRepository = new InMemoryTablesRepository();
    playersRepository = new InMemoryPlayersRepository();
    sut = new CreateTableUseCase(tableRepository, playersRepository);
  });

  it("should be able to create a table and an owner", async () => {
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
