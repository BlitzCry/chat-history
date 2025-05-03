import {IConversationRepository} from "@conversation/domain/repositories/conversation.interface";
import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";

export class TypeORMConversationRepository implements IConversationRepository {
    async save(aggregate: ConversationAggregate): Promise<void> {

    }
}