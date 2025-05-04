import {ApiProperty} from "@nestjs/swagger";

export class UpdateConversationRequest {
    @ApiProperty({
        description: "The user id to use for the conversation",
        example: "407c7ffe-303a-4cf1-8c58-c352ae1af0de",
    })
    public user_id: string;

    @ApiProperty({
        description: "The model id to use for the conversation",
        example: "894489de-626b-48eb-9d06-ec1f80c1ad54",
    })
    public model_id: string;
}