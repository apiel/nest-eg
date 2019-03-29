import { Field, ID, ObjectType, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}

@ObjectType({ implements: Recipe })
export class RecipeA implements Recipe {
  id: string;
  title: string;
  description: string;
  creationDate: Date;
  ingredients: string[];
}
