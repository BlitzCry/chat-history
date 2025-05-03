export class Message {
    constructor(
        public readonly content: string,  // The text of the message
        public readonly role: string,  // Role of the sender (user or AI)
        public readonly timestamp: Date = new Date(),  // When the message was sent
    ) {
    }
}
