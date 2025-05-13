import { Player } from "@/domain/enterprise/entities/player";
import { Table } from "@/domain/enterprise/entities/table";
import { Token } from "@/domain/enterprise/entities/value-objects/token";

export interface TablesRepository {
  create({ table }: { table: Table }): Promise<{ table: Table }>;
  findUniqueByToken({
    tableToken,
  }: {
    tableToken: Token;
  }): Promise<{ table: Table }>;
  save({ table }: { table: Table }): Promise<void>;
  addPlayer({
    player,
    tableToken,
  }: {
    player: Player;
    tableToken: Token;
  }): Promise<void>;
}
