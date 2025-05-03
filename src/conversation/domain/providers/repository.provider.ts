import {Provider} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {TypeORMConversationRepository} from "@conversation/infrastructure/persistence/typeorm/conversation.repository";

export const ConversationRepositoryProvider: Provider = {
    provide: "IConversationRepository",
    useFactory: (configService: ConfigService,
                 typeOrmConversationRepository: TypeORMConversationRepository) => {
        const type = configService.get<string>("ORM_PROVIDER");

        switch (type?.toLowerCase()) {
            case "typeorm":
                return typeOrmConversationRepository;

            default:
                throw new Error("Invalid ORM_PROVIDER value. Available: typeorm");
        }
    },
    inject: [ConfigService, TypeORMConversationRepository]
};