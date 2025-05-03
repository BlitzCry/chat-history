import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetConversationQuery} from "@conversation/application/query/get-conversation.query";
import {Inject} from "@nestjs/common";
import {IConversationRepository} from "@conversation/domain/repositories/conversation.interface";

@QueryHandler(GetConversationQuery)
export class GetConversationQueryHandler implements IQueryHandler<GetConversationQuery> {
    constructor(@Inject("IConversationRepository") private readonly repository: IConversationRepository) {
    }

    async execute(query: GetConversationQuery) {
        console.log("Handled query");
    }
}