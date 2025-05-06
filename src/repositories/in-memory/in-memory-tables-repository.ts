import { Table } from "@/core/entities/table";
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";

import { TablesRepository } from "../tables-repository";

export class InMemoryTablesRepository implements TablesRepository {
  private tables: Table[] = [];

  async create({
    tableName,
  }: {
    tableName: string;
  }): Promise<{ table: Table }> {
    const table = new Table({ props: { tableName } });

    this.tables.push(table);

    return { table };
  }

  get tablesList() {
    return this.tables;
  }

  async findUniqueByToken({
    tableToken,
  }: {
    tableToken: string;
  }): Promise<{ table: Table }> {
    const table = this.tables.find((table) => table.token === tableToken);

    if (!table) throw new ResourceNotFoundError("Table not found");

    return { table };
  }
}
