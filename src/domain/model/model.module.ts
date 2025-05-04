import {Module} from "@nestjs/common";
import {AiModelFactory} from "@src/domain/model/domain/factories/ai-model.factory";
import {CommandHandlers, QueryHandlers} from "@src/domain/model/application/handlers/handlers";

@Module({
    providers: [AiModelFactory, ...CommandHandlers, ...QueryHandlers],
    exports: [AiModelFactory]
})
export class ModelModule {
}
