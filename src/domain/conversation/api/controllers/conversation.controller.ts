import {Body, Controller, Post} from "@nestjs/common";
import {CreateConversationRequest} from "@src/domain/conversation/api/dto/create-conversation.request";
import {StartConversationCommand} from "@src/domain/conversation/application/commands/start-conversation.command";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {ApiBody} from "@nestjs/swagger";
import {GetConversationQuery} from "@src/domain/conversation/application/query/get-conversation.query";

@Controller("/conversation")
export class ConversationController {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {
    }

    @Post()
    @ApiBody({type: CreateConversationRequest})
    async start(@Body() body: CreateConversationRequest) {
        const conversationId: string = await this.commandBus.execute(
            new StartConversationCommand(body.user_id, body.model_id)
        );

        return this.queryBus.execute(
            new GetConversationQuery(conversationId)
        )
    }
}
