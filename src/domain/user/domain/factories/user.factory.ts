import {v4 as uuidv4} from "uuid";
import {User} from "@user/domain/entities/user.entity";

export class UserFactory {
    static create({id = uuidv4(), externalId = uuidv4(), createdAt = new Date(), updatedAt = new Date()}): User {
        return new User(id, externalId, createdAt, updatedAt);
    }
}