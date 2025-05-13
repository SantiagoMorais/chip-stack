import { randomUUID } from "crypto";

import { IPlayerProps } from "../interfaces/player-props";

export class Player {
  private _id: string;
  private props: IPlayerProps;

  constructor({ props, id }: { props: IPlayerProps; id?: string }) {
    this._id = id ?? randomUUID();
    this.props = {
      id: id ?? randomUUID(),
      tableToken: props.tableToken,
      name: props.name,
      isOwner: props.isOwner ?? false,
      chips: props.chips ?? 500,
      table: props.table,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get tableToken() {
    return this.props.tableToken;
  }

  get name() {
    return this.props.name;
  }

  get chips() {
    return this.props.chips!;
  }

  get isOwner() {
    return this.props.isOwner;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set chips(value: number) {
    this.props.chips = value;
    this.touch();
  }

  set name(newName: string) {
    this.props.name = newName;
    this.touch();
  }

  set isOwner(isTheTableOwner: boolean) {
    this.props.isOwner = isTheTableOwner;
    this.touch();
  }
}
