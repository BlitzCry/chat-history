export class UpdateConversationCommand {
    constructor(public readonly id: string, public readonly userId: string, public readonly modelId: string) {
    }
}