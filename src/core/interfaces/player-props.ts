import { Table } from "../entities/table";

export interface IPlayerProps {
  id?: string;
  name: string;
  isOwner: boolean;
  chips: number;
  tableToken: string;
  table: Table;
}
