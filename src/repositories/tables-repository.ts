import { Table } from "@/core/entities/table";

export interface TablesRepository {
  create({ tableName }: { tableName: string }): Promise<{ table: Table }>;
  findUniqueByToken({
    tableToken,
  }: {
    tableToken: string;
  }): Promise<{ table: Table }>;
}
