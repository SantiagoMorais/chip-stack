import { Player } from "@/domain/entities/player";

export interface PlayersRepository {
  create({ player }: { player: Player }): Promise<{ player: Player }>;
}
