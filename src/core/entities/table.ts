import { randomUUID } from "crypto";

import { ITableProps } from "../interfaces/table-props";

export class Table {
  private _id: string;
  private props: ITableProps & { token: string };

  constructor({ props, id }: { props: ITableProps; id?: string }) {
    this._id = id ?? randomUUID();
    this.props = {
      createdAt: props.createdAt ?? new Date(),
      isLocked: props.isLocked ?? false,
      ownerId: props.ownerId ?? null,
      players: props.players ?? [],
      tableName: props.tableName,
      token: this.generateToken(),
    };
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  get id() {
    return this._id;
  }

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
}
