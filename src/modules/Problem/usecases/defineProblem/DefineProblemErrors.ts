export class DuplicateProblemError extends Error {
    constructor(name: string) {
        super(`The name ${name} is already chosen for a category!`)
    }
}