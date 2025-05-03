import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";

export interface IConversationRepository {
    save(aggregate: ConversationAggregate): Promise<unknown>
}
