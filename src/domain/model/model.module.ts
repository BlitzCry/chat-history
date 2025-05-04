import {Module} from "@nestjs/common";
import {AiModelFactory} from "@src/domain/model/domain/factories/ai-model.factory";

@Module({
    providers: [AiModelFactory],
    exports: [AiModelFactory]
})
export class ModelModule {
}
