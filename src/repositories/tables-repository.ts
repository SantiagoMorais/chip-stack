import { Table } from "@/domain/entities/table";
import { ITableProps } from "@/core/interfaces/table-props";

export interface TablesRepository {
  create({ table }: { table: Table }): Promise<{ table: Table }>;
  findUniqueByToken({
    tableToken,
  }: {
    tableToken: string;
  }): Promise<{ table: Table }>;
  update({
    data,
    tableToken,
  }: {
    data: Partial<ITableProps>;
    tableToken: string;
  }): Promise<{ table: Table }>;
}
