import { Entity } from "@/core/entities/entity";

import { ITableProps } from "../../core/interfaces/table-props";
import { Player } from "./player";

export class Table extends Entity<ITableProps> {
  get tableName() {
    return this.props.tableName;
  }

  get ownerId() {
    return this.props.ownerId;
  }

  get token() {
    return this.props.token;
  }

  get isLocked() {
    return this.props.isLocked;
  }

  get players() {
    return this.props.players;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set players(players: Player[] | undefined) {
    this.players = players;
    this.touch();
  }

  set isLocked(lock: boolean) {
    this.isLocked = lock;
    this.touch();
  }

  set ownerId(id: string | undefined | null) {
    this.ownerId = id;
    this.touch();
  }

  set tableName(newName: string) {
    this.tableName = newName;
    this.touch();
  }
}
