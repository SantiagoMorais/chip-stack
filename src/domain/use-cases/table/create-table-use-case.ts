import { Table } from "@/domain/entities/table";
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
    const tableRecord = new Table({ props: { tableName } });
    await this.tablesRepository.create({ table: tableRecord });

    const { player } = await this.playersRepository.create({
      name: ownerName,
      tableToken: tableRecord.token,
    });

    const { table } = await this.tablesRepository.update({
      tableToken: tableRecord.token,
      data: {
        ownerId: player.id,
        players: [player],
      },
    });

    return { table };
  }
}
