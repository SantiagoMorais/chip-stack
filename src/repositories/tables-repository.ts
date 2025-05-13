import { Player } from "@/domain/entities/player";
import { Table } from "@/domain/entities/table";
import { Token } from "@/domain/entities/value-objects/token";

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
