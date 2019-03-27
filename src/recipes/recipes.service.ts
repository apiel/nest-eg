import { Injectable } from '@nestjs/common';
import { random, seed, lorem } from 'faker';

import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    // seed(1);
    const count = 3;
    const list: Recipe[] = [];
    for(let n = 0; n < count; n++) {
        list.push({
        id: random.uuid(),
        title: random.words(),
        description: lorem.sentences(),
        creationDate: new Date(),
        ingredients: [random.word(), random.word()],
      });
    }
    return list;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
