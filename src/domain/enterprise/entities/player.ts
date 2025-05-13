import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { IPlayerProps } from "@/core/interfaces/player-props";
import { Optional } from "@/core/types/optional";

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

  static create(
    props: Optional<IPlayerProps, "chips" | "createdAt" | "id">,
    id?: UniqueEntityId
  ) {
    const player = new Player(
      {
        ...props,
        chips: 500,
        createdAt: new Date(),
        id: id ?? new UniqueEntityId(),
      },
      id
    );

    return player;
  }
}
