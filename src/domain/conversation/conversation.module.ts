import {Module} from "@nestjs/common";
import {ConversationController} from "@src/domain/conversation/api/controllers/conversation.controller";
import {CommandHandlers, QueryHandlers} from "@src/domain/conversation/application/handlers/handlers";
import {ConversationRepositoryProvider} from "@src/domain/conversation/domain/providers/repository.provider";
import {PrismaService} from "@commons/orm/prisma.service";
import {PrismaConversationRepository} from "@conversation/infrastructure/persistence/prisma/conversation.repository";

@Module({
    imports: [],
    providers: [...CommandHandlers, ...QueryHandlers, ConversationRepositoryProvider, PrismaService, PrismaConversationRepository],
    controllers: [ConversationController],
})
export class ConversationModule {
}

