import { Entity } from "@/core/entities/entity";

import { IPlayerProps } from "../../core/interfaces/player-props";

export class Player extends Entity<IPlayerProps> {
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
