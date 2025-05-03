import {StartConversationCommand} from "@conversation/application/commands/start-conversation.command";
import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";
import {ConversationDTO} from "@conversation/application/dtos/conversation.dto";

@CommandHandler(StartConversationCommand)
export class StartConversationHandler implements ICommandHandler<StartConversationCommand> {
    async execute(command: StartConversationCommand) {
        const aggregate = ConversationAggregate.start(command.userId, command.message);

        console.log("Handled");
        // await this.store.save(aggregate);

        return ConversationDTO.fromAggregate(aggregate)
    }
}
