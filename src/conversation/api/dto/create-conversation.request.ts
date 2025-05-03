import {ApiProperty} from "@nestjs/swagger";

export class CreateConversationRequest {
    @ApiProperty()
    public user_id: string;

    @ApiProperty()
    public message: string;
}
