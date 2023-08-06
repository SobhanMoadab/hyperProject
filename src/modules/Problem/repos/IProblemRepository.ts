
export interface IProblemRepository {
    save(problem: any): Promise<void>
}