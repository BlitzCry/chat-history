import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";
import {ConversationId} from "@conversation/domain/value-objects/conversation-id.vo";

export class ConversationDTO {
    constructor(public readonly id: ConversationId, public readonly userId: string, public readonly messages: string[]) {
    }

    static fromAggregate(aggregate: ConversationAggregate): ConversationDTO {
        return new ConversationDTO(aggregate.id, aggregate.userId, aggregate.messages.map(m => m.content));
    }
}
