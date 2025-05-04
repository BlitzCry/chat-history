import {IConversationRepository} from "@src/domain/conversation/domain/repositories/conversation.interface";
import {ConversationAggregate} from "@src/domain/conversation/domain/aggregates/conversation.aggregate";
import {PrismaService} from "@commons/orm/prisma.service";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PrismaConversationRepository implements IConversationRepository {
    constructor(private readonly prisma: PrismaService) {
    }

    async save(aggregate: ConversationAggregate): Promise<void> {
        await this.prisma.conversation.create({
            data: {
                id: aggregate.id.getValue,
                user_id: aggregate.userId,
                model_id: aggregate.modelId,
                created_at: new Date(),
                updated_at: new Date(),
            }
        })
    }

    async update(aggregate: ConversationAggregate): Promise<void> {
        await this.prisma.conversation.update({
            where: {id: aggregate.id.getValue},
            data: {
                model_id: aggregate.modelId,
                updated_at: new Date(),
            }
        })
    }

    async getById(id: string): Promise<unknown> {
        return this.prisma.conversation.findFirst({
            where: {id: id},
            orderBy: {
                created_at: "desc"
            }
        })
    }
}