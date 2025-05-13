import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { Player } from "@/domain/entities/player";
import { Table } from "@/domain/entities/table";
import { Token } from "@/domain/entities/value-objects/token";

import { TablesRepository } from "../tables-repository";

export class InMemoryTablesRepository implements TablesRepository {
  private tables: Table[] = [];

  async create({ table }: { table: Table }): Promise<{ table: Table }> {
    this.tables.push(table);
    return { table };
  }

  async findUniqueByToken({
    tableToken,
  }: {
    tableToken: Token;
  }): Promise<{ table: Table }> {
    const table = this.tables.find((table) => table.token === tableToken);
    if (!table) throw new ResourceNotFoundError("Table not found");
    return { table };
  }

  async save({ table }: { table: Table }): Promise<void> {
    const index = this.tables.findIndex((t) => t.token === table.token);
    if (index === -1) throw new ResourceNotFoundError("Table not found");
    this.tables[index] = table;
  }

  get tablesList() {
    return this.tables;
  }

  async addPlayer({
    player,
    tableToken,
  }: {
    player: Player;
    tableToken: Token;
  }): Promise<void> {
    const { table } = await this.findUniqueByToken({ tableToken });
    table.addPlayer({ player });
  }
}
