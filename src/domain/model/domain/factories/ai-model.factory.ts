import {v4 as uuidv4} from "uuid";
import {AiModel} from "@src/domain/model/domain/entities/ai-model.entity";

export class AiModelFactory {
    static create(name: string, provider: string, metadata: string) {
        return new AiModel(uuidv4(), name, provider, metadata, new Date(), new Date());
    }
}