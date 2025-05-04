export interface IModelRepository {
    getById(id: string): Promise<any>
}