export class User {
    constructor(
        public readonly id: string,
        public readonly externalId: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
    }

    toQuery() {
        return {
            id: this.id,
            external_id: this.externalId,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }
}