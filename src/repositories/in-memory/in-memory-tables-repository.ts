import { Table } from "@/core/entities/table";
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { ITableProps } from "@/core/interfaces/table-props";

import { TablesRepository } from "../tables-repository";

export class InMemoryTablesRepository implements TablesRepository {
  private tables: Table[] = [];

  async create({ table }: { table: Table }): Promise<{ table: Table }> {
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

  async update({
    data,
    tableToken,
  }: {
    data: Partial<ITableProps>;
    tableToken: string;
  }): Promise<{ table: Table }> {
    const tableIndex = this.tables.findIndex(
      (table) => table.token === tableToken
    );

    if (tableIndex === -1) throw new ResourceNotFoundError("Table not found");

    const existingTableProps = this.tables[tableIndex];

    const updatedProps: ITableProps = {
      ...existingTableProps.getProps(),
      ...data,
    };

    const updatedTable = new Table({
      id: existingTableProps.id,
      props: updatedProps,
    });

    this.tables[tableIndex] = updatedTable;

    return { table: updatedTable };
  }
}
