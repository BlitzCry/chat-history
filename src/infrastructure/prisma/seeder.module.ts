import {Module} from "@nestjs/common";
import {SeederService} from "@seeder/prisma/seeder.service";
import {PrismaService} from "@commons/orm/prisma.service";
import {UserSeeder} from "@seeder/prisma/seeder/user.seeder";
import {SeedCommand} from "@seeder/prisma/seeder.command";
import {AiModelSeeder} from "@seeder/prisma/seeder/ai-model.seeder";

@Module({
    providers: [
        SeederService,
        PrismaService,
        UserSeeder,
        AiModelSeeder,
        SeedCommand
    ]
})
export class SeederModule {
}