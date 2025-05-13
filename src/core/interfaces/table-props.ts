import { Token } from "@/domain/entities/value-objects/token";

import { Player } from "../../domain/entities/player";
import { UniqueEntityId } from "../entities/unique-entity-id";

export interface ITableProps {
  id: UniqueEntityId;
  tableName: string;
  isLocked: boolean;
  ownerId: UniqueEntityId | null;
  token: Token;
  players?: Array<Player>;
  createdAt: Date;
  updatedAt?: Date;
}
