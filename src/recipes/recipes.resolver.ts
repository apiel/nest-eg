import {
  Args,
  Query,
  Resolver,
  ResolveProperty
} from "@nestjs/graphql";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe, RecipeA } from "./models/recipe";
import { RecipesService } from "./recipes.service";

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => [Recipe])
  async recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.findAll(recipesArgs);
    // const recipes = await this.recipesService.findAll(recipesArgs);
    // return recipes.map(recipe => {
    //   const recipeA = new RecipeA();
    //   Object.assign(recipeA, recipe);
    //   return recipeA;
    // });
  }

  @ResolveProperty('__resolveType')
  resolveType(recipe: Recipe): string {
    return 'RecipeA';
  }
}
