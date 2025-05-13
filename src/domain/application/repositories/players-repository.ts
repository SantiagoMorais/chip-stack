import { Player } from "@/domain/enterprise/entities/player";

export interface PlayersRepository {
  create({ player }: { player: Player }): Promise<{ player: Player }>;
}
