import {Injectable} from "@nestjs/common";
import {PrismaService} from "@commons/orm/prisma.service";
import {UserSeeder} from "@seeder/prisma/seeder/user.seeder";
import {AiModelSeeder} from "@seeder/prisma/seeder/ai-model.seeder";

@Injectable()
export class SeederService {
    constructor(
        private readonly userSeeder: UserSeeder,
        private readonly aiModelSeeder: AiModelSeeder
    ) {
    }

    async seed() {
        await this.userSeeder.seed();
        await this.aiModelSeeder.seed();
    }
}