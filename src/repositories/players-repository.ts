import { Player } from "@/core/entities/player";

export interface PlayersRepository {
  create({
    name,
    tableToken,
  }: {
    name: string;
    tableToken: string;
  }): Promise<{ player: Player }>;
}
