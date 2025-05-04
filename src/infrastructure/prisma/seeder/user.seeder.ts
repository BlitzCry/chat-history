import {Injectable} from "@nestjs/common";
import {ISeeder} from "@seeder/prisma/seeder/seeder.interface";
import {PrismaService} from "@commons/orm/prisma.service";
import {UserFactory} from "@user/domain/factories/user.factory";

@Injectable()
export class UserSeeder implements ISeeder {
    constructor(private readonly prisma: PrismaService) {
    }

    async seed() {
        console.info("[Seed][User] Start seeding users");

        const user = UserFactory.create({});

        await this.prisma.user.create({data: user.toQuery()})

        console.info("[Seed][User] Users seed successfully");
    }
}