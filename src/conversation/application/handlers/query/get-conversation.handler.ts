import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {SaveConversationQuery} from "@conversation/application/query/save-conversation.query";

@QueryHandler(SaveConversationQuery)
export class SaveConversationHandler implements IQueryHandler<SaveConversationQuery> {
    async execute(query: SaveConversationQuery) {
        console.log("Handled query");
    }
}