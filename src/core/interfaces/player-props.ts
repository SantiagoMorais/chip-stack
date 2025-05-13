import { Table } from "../../domain/entities/table";
import { UniqueEntityId } from "../entities/unique-entity-id";

export interface IPlayerProps {
  id: UniqueEntityId;
  name: string;
  isOwner: boolean;
  chips: number;
  tableToken: string;
  table: Table;
  createdAt: Date;
  updatedAt?: Date;
}
