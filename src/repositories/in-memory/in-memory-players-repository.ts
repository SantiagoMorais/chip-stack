import { Player } from "@/domain/entities/player";

import { PlayersRepository } from "../players-repository";

export class InMemoryPlayersRepository implements PlayersRepository {
  private players: Player[] = [];

  async create({ player }: { player: Player }): Promise<{ player: Player }> {
    this.players.push(player);
    return { player };
  }
}
