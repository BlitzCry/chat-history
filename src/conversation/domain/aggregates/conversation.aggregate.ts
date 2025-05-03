import {ConversationId} from "@conversation/domain/value-objects/conversation-id.vo";
import {Message} from "@conversation/domain/entities/message.entity";

export class ConversationAggregate {

    private constructor(
        public readonly id: ConversationId,
        public readonly userId: string,
        public readonly messages: Message[],
    ) {
    }

    static start(userId: string, initialMessage: string): ConversationAggregate {
        const id = new ConversationId();  // Create a new ID
        const message = new Message(initialMessage, 'user');
        const messages = [message];

        return new ConversationAggregate(id, userId, messages);
    }

    addMessage(message: string, role: string): void {
        this.messages.push(new Message(message, role));
    }
}
