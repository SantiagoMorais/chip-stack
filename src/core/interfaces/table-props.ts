import { Token } from "@/domain/entities/value-objects/token";

import { Player } from "../../domain/entities/player";

export interface ITableProps {
  tableName: string;
  isLocked: boolean;
  ownerId: string | null;
  token: Token;
  players?: Array<Player>;
  createdAt: Date;
  updatedAt?: Date;
}
