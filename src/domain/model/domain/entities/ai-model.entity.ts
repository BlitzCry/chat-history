
export class AiModel {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly provider: string,
        public readonly metadata: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
    }

    toQuery() {
        return {
            id: this.id,
            name: this.name,
            provider: this.provider,
            metadata: this.metadata,
            created_at: this.createdAt,
            updated_at: this.updatedAt,
        }
    }
}