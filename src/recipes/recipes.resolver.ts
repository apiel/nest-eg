import { NotFoundException } from "@nestjs/common";
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ResolveProperty
} from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe, RecipeA } from "./models/recipe";
import { RecipesService } from "./recipes.service";

const pubSub = new PubSub();

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => [Recipe])
  async recipes(@Args() recipesArgs: RecipesArgs): Promise<RecipeA[]> {
    const recipes = await this.recipesService.findAll(recipesArgs);
    return recipes.map(recipe => {
      const recipeA = new RecipeA();
      Object.assign(recipeA, recipe);
      return recipeA;
    });
  }

  @ResolveProperty("__resolveType")
  resolveType(recipe: Recipe): string {
    return "RecipeA";
  }
}
