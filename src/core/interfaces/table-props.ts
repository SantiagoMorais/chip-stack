import { Player } from "../entities/player";

export interface ITableProps {
  tableName: string;
  isLocked: boolean;
  ownerId: string | null;
  players?: Array<Player>;
  createdAt: Date;
  updatedAt?: Date;
}
