import { PlayersRepository } from "@/repositories/players-repository";
import { TablesRepository } from "@/repositories/tables-repository";

export class CreateTableUseCase {
  private tablesRepository: TablesRepository;
  private playersRepository: PlayersRepository;

  constructor(
    tablesRepository: TablesRepository,
    playersRepository: PlayersRepository
  ) {
    this.tablesRepository = tablesRepository;
    this.playersRepository = playersRepository;
  }

  async execute({
    ownerName,
    tableName,
  }: {
    tableName: string;
    ownerName: string;
  }) {
    const tableRecord = await this.tablesRepository.create({ tableName });

    const { player } = await this.playersRepository.create({
      name: ownerName,
      tableToken: tableRecord.table.token,
    });

    const { table } = await this.tablesRepository.update({
      tableToken: tableRecord.table.token,
      data: {
        ownerId: player.id,
        players: [player],
      },
    });

    return { table };
  }
}
