export class StartConversationCommand {
    constructor(public readonly userId: string, public readonly message: string) {
    }
}
