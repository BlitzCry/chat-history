import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetModelQuery} from "@src/domain/model/application/query/get-model.query";
import {Inject} from "@nestjs/common";

@QueryHandler(GetModelQuery)
export class GetModelQueryHandler implements IQueryHandler<GetModelQuery {
    constructor() {
    }


    async execute(query: GetModelQuery) {

    }
}