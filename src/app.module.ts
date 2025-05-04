import {Module, OnModuleInit} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CqrsModule} from "@nestjs/cqrs";
import {UserModule} from "@user/user.module";
import {ConversationModule} from "@conversation/conversation.module";
import {SeederModule} from "@seeder/prisma/seeder.module";
import {ConfigModule} from "@nestjs/config";
import {ModelModule} from "@src/domain/model/model.module";

@Module({
    imports: [
        ModelModule,
        UserModule,
        ConversationModule,
        SeederModule,
        CqrsModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env"
        })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}