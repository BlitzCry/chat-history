import {Module} from "@nestjs/common";
import {ConversationController} from "@conversation/api/controllers/conversation.controller";
import {CommandHandlers, QueryHandlers} from "@conversation/application/handlers/handlers";
import {ConversationRepositoryProvider} from "@conversation/domain/providers/repository.provider";
import {PrismaService} from "@commons/orm/prisma.service";

@Module({
    imports: [PrismaService],
    providers: [...CommandHandlers, ...QueryHandlers, ConversationRepositoryProvider],
    controllers: [ConversationController],
})
export class ConversationModule {
}

