import { Player } from "../entities/player";

export interface ITableProps {
  tableName: string;
  isLocked?: boolean;
  createdAt?: Date;
  ownerId?: string | null;
  players?: Array<Player>;
}
