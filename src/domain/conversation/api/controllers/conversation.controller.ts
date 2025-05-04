import {Body, Controller, Param, Post} from "@nestjs/common";
import {CreateConversationRequest} from "@src/domain/conversation/api/dto/create-conversation.request";
import {StartConversationCommand} from "@src/domain/conversation/application/commands/start-conversation.command";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {ApiBody} from "@nestjs/swagger";
import {GetConversationQuery} from "@src/domain/conversation/application/query/get-conversation.query";
import {UpdateConversationRequest} from "@conversation/api/dto/update-conversation.request";
import {UpdateConversationCommand} from "@conversation/application/commands/update-conversation.command";

@Controller("/conversation")
export class ConversationController {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {
    }

    @Post()
    @ApiBody({type: CreateConversationRequest})
    async start(@Body() request: CreateConversationRequest) {
        const conversationId: string = await this.commandBus.execute(
            new StartConversationCommand(request.user_id, request.model_id)
        );

        return this.queryBus.execute(
            new GetConversationQuery(conversationId)
        )
    }

    @Post("/:id/update")
    async update(@Body() request: UpdateConversationRequest, @Param("id") id: string) {
        const conversationId: string = await this.commandBus.execute(
            new UpdateConversationCommand(id, request.user_id, request.model_id)
        )

        return this.queryBus.execute(
            new GetConversationQuery(conversationId)
        )
    }
}
