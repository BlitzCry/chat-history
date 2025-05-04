import {StartConversationHandler} from "@src/domain/conversation/application/handlers/command/start-conversation.handler";
import {GetConversationQueryHandler} from "@src/domain/conversation/application/handlers/query/get-conversation.handler";
import {UpdateConversationHandler} from "@conversation/application/handlers/command/update-conversation.handler";

export const CommandHandlers = [
    StartConversationHandler,
    UpdateConversationHandler
]

export const QueryHandlers = [
    GetConversationQueryHandler
]