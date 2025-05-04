import {StartConversationCommand} from "@src/domain/conversation/application/commands/start-conversation.command";
import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {ConversationAggregate} from "@src/domain/conversation/domain/aggregates/conversation.aggregate";
import {Inject} from "@nestjs/common";
import {IConversationRepository} from "@src/domain/conversation/domain/repositories/conversation.interface";

@CommandHandler(StartConversationCommand)
export class StartConversationHandler implements ICommandHandler<StartConversationCommand> {
    constructor(@Inject("IConversationRepository") private readonly repository: IConversationRepository) {
    }

    async execute(command: StartConversationCommand): Promise<string> {
        const aggregate = ConversationAggregate.start(command.userId, command.modelId);

        await this.repository.save(aggregate);

        return aggregate.id.getValue
    }
}
