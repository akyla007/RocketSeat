import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string,
    description: string,

}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }

    execute({ name, description }: IRequest): void {
        const SpecificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(SpecificationAlreadyExists){
            throw new Error("Specification Already Exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        })
    }
}
export default CreateSpecificationService;