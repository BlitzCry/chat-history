import {ConversationId} from "@src/domain/conversation/domain/value-objects/conversation-id.vo";
import {Message} from "@src/domain/conversation/domain/entities/message.entity";

export class ConversationAggregate {

    private constructor(
        public readonly id: ConversationId,
        public readonly userId: string,
        public readonly modelId: string,
        public readonly messages: Message[],
    ) {
    }

    static start(userId: string, modelId: string, id: ConversationId = new ConversationId()): ConversationAggregate {
        return new ConversationAggregate(id, userId, modelId, []);
    }

    addMessage(message: string, role: string): void {
        this.messages.push(new Message(message, role));
    }
}
