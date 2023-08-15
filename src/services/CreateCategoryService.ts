import { CategoriesRepository } from "../repositories/Categoriesrepository";
import { ICategoriesRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryServices {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlredyExists = this.categoriesRepository.findByName(name);

    if (categoryAlredyExists) {
      throw new Error("category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryServices };
