import {StartConversationHandler} from "@conversation/application/handlers/command/start-conversation.handler";
import {GetConversationQueryHandler} from "@conversation/application/handlers/query/get-conversation.handler";

export const CommandHandlers = [
    StartConversationHandler
]

export const QueryHandlers = [
    GetConversationQueryHandler
]