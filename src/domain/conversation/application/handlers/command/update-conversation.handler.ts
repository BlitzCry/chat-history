import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UpdateConversationCommand} from "@conversation/application/commands/update-conversation.command";
import {Inject} from "@nestjs/common";
import {IConversationRepository} from "@conversation/domain/repositories/conversation.interface";
import {ConversationAggregate} from "@conversation/domain/aggregates/conversation.aggregate";
import {ConversationId} from "@conversation/domain/value-objects/conversation-id.vo";

@CommandHandler(UpdateConversationCommand)
export class UpdateConversationHandler implements ICommandHandler<UpdateConversationCommand> {
    constructor(@Inject("IConversationRepository") private readonly repository: IConversationRepository) {
    }

    async execute(command: UpdateConversationCommand): Promise<string> {
        const aggregate: ConversationAggregate = ConversationAggregate.start(command.userId, command.modelId, new ConversationId(command.id));

        await this.repository.update(aggregate);

        return aggregate.id.getValue;
    }
}