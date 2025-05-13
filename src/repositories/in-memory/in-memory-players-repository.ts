import { Player } from "@/domain/entities/player";

import { PlayersRepository } from "../players-repository";
import { TablesRepository } from "../tables-repository";

export class InMemoryPlayersRepository implements PlayersRepository {
  private players: Player[] = [];
  private tablesRepository: TablesRepository;

  constructor(tablesRepository: TablesRepository) {
    this.tablesRepository = tablesRepository;
  }

  async create({
    name,
    tableToken,
  }: {
    name: string;
    tableToken: string;
  }): Promise<{ player: Player }> {
    const { table } = await this.tablesRepository.findUniqueByToken({
      tableToken,
    });

    const isOwner =
      !table.players || !table.players.find((player) => player.isOwner);

    const player = new Player({
      props: {
        name,
        table,
        tableToken: table.token,
        isOwner,
      },
    });

    this.players.push(player);

    return { player };
  }
}
