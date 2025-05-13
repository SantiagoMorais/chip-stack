import { PlayersRepository } from "@/domain/application/repositories/players-repository";
import { TablesRepository } from "@/domain/application/repositories/tables-repository";
import { Player } from "@/domain/enterprise/entities/player";
import { Table } from "@/domain/enterprise/entities/table";

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
    const table = Table.create({ tableName, isLocked: false });
    const player = Player.create({
      isOwner: true,
      name: ownerName,
      table,
      tableToken: table.token,
    });

    await this.playersRepository.create({ player });
    table.addPlayer({ player });
    await this.tablesRepository.create({ table });

    return { table };
  }
}
