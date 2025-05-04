import {ISeeder} from "@seeder/prisma/seeder/seeder.interface";
import {PrismaService} from "@commons/orm/prisma.service";
import {AiModelFactory} from "@src/domain/model/domain/factories/ai-model.factory";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AiModelSeeder implements ISeeder {
    constructor(private readonly prisma: PrismaService) {
    }

    async seed() {
        console.info("[Seed][AI Model] Start seeding AI models");

        const AIModel = AiModelFactory.create("GPT", "OpenAI", "{}");

        try {
            await this.prisma.aIModel.create({data: AIModel.toQuery()})
        } catch (error: unknown) {
            console.error({error})
        }

        console.info("[Seed][AI Model] AI models seed successfully");
    }
}
