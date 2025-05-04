import {Module} from "@nestjs/common";
import {UserFactory} from "@user/domain/factories/user.factory";

@Module({
    providers: [UserFactory],
    exports: [UserFactory]
})
export class UserModule {

}