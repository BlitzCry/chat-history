import {ConversationAggregate} from "@src/domain/conversation/domain/aggregates/conversation.aggregate";

export interface IConversationRepository {
    save(aggregate: ConversationAggregate): Promise<unknown>

    update(aggregate: ConversationAggregate): Promise<unknown>

    getById(id: string): Promise<unknown>
}
