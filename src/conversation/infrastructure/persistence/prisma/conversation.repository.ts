import {IConversationRepository} from "@conversation/domain/repositories/conversation.interface";
import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";
import {PrismaService} from "@commons/orm/prisma.service";

export class PrismaConversationRepository implements IConversationRepository {
    constructor(private readonly prisma: PrismaService) {
    }

    async save(aggregate: ConversationAggregate): Promise<void> {
        // await this.prisma.conversation.create({
        //
        // })
    }
}