import {CommandFactory} from "nest-commander";
import {SeederModule} from "@seeder/prisma/seeder.module";

async function bootstrap() {
    await CommandFactory.run(SeederModule)
}

bootstrap()