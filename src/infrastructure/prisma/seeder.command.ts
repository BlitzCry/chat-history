import {Command, CommandRunner} from 'nest-commander';
import {SeederService} from "@seeder/prisma/seeder.service";
import {Injectable} from "@nestjs/common";

@Injectable()
@Command({
    name: "seed",
    description: "Seed the database with mock data"
})
export class SeedCommand extends CommandRunner {
    constructor(private readonly seederService: SeederService) {
        super();
    }

    async run(): Promise<void> {
        await this.seederService.seed();
    }
}