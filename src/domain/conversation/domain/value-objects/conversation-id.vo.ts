import {v4 as uuidv4} from 'uuid';

export class ConversationId {
    private readonly value: string;

    constructor(value?: string) {
        this.value = value || uuidv4();
    }

    get getValue(): string {
        return this.value;
    }

    equals(other: ConversationId): boolean {
        return this.value === other.getValue;
    }

    toString(): string {
        return this.value;
    }
}
