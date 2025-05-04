import {StartConversationHandler} from "@src/domain/conversation/application/handlers/command/start-conversation.handler";
import {GetConversationQueryHandler} from "@src/domain/conversation/application/handlers/query/get-conversation.handler";

export const CommandHandlers = [
    StartConversationHandler
]

export const QueryHandlers = [
    GetConversationQueryHandler
]