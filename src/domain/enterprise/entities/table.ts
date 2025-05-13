import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { ITableProps } from "@/core/interfaces/table-props";
import { Optional } from "@/core/types/optional";

import { Player } from "./player";
import { Token } from "./value-objects/token";

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
    this.props.players = players;
    this.touch();
  }

  set isLocked(lock: boolean) {
    this.props.isLocked = lock;
    this.touch();
  }

  set ownerId(id: UniqueEntityId | null) {
    this.props.ownerId = id;
    this.touch();
  }

  set tableName(newName: string) {
    this.props.tableName = newName;
    this.touch();
  }

  static create(
    props: Optional<
      ITableProps,
      "createdAt" | "token" | "updatedAt" | "ownerId" | "id"
    >,
    id?: UniqueEntityId
  ) {
    const table = new Table(
      {
        ...props,
        createdAt: new Date(),
        token: new Token(),
        ownerId: null,
        id: id ?? new UniqueEntityId(),
      },
      id
    );

    return table;
  }

  addPlayer({ player }: { player: Player }) {
    if (!this.props.players) this.props.players = [];
    this.props.players.push(player);
    this.touch();
  }
}
