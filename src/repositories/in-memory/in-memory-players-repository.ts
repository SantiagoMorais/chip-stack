import { Player } from "@/core/entities/player";

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

    const player = new Player({
      props: {
        name,
        table,
        tableToken: table.token,
      },
    });

    this.players.push(player);

    return { player };
  }
}
