import {Provider} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {PrismaConversationRepository} from "@conversation/infrastructure/persistence/prisma/conversation.repository";

export const ConversationRepositoryProvider: Provider = {
    provide: "IConversationRepository",
    useFactory: (configService: ConfigService,
                 prismaConversationRepository: PrismaConversationRepository) => {
        const type = configService.get<string>("ORM_PROVIDER");

        switch (type?.toLowerCase()) {
            case "prisma":
                return prismaConversationRepository;

            default:
                throw new Error("Invalid ORM_PROVIDER value. Available: prisma");
        }
    },
    inject: [ConfigService, PrismaConversationRepository]
};