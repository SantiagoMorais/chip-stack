import { PlayersRepository } from "@/domain/application/repositories/players-repository";
import { Player } from "@/domain/enterprise/entities/player";

export class InMemoryPlayersRepository implements PlayersRepository {
  private players: Player[] = [];

  async create({ player }: { player: Player }): Promise<{ player: Player }> {
    this.players.push(player);
    return { player };
  }
}
