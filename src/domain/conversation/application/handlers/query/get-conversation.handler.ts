import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetConversationQuery} from "@src/domain/conversation/application/query/get-conversation.query";
import {Inject} from "@nestjs/common";
import {IConversationRepository} from "@src/domain/conversation/domain/repositories/conversation.interface";

@QueryHandler(GetConversationQuery)
export class GetConversationQueryHandler implements IQueryHandler<GetConversationQuery> {
    constructor(@Inject("IConversationRepository") private readonly repository: IConversationRepository) {
    }

    async execute(query: GetConversationQuery) {
        return this.repository.getById(query.id);
    }
}