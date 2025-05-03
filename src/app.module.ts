import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConversationModule} from "@conversation/conversation.module";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
    imports: [ConversationModule, CqrsModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}