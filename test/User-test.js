const chai = require('chai');
const expect = chai.expect;

import User from '../src/classes/User.js';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('User', () => {
  let user, recipeData, recipe

  beforeEach(() => {
    user = new User({
      name: "Saige O'Kon",
      id: 1,
    });

    recipeData = [
      {
        id: 595736,
        image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: 'c',
            },
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: 'tsp',
            },
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: 'large',
            },
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: 'c',
            },
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: 'Tbsp',
            },
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: 'c',
            },
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: 'tsp',
            },
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: 'servings',
            },
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: 'c',
            },
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: 'c',
            },
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: 'tsp',
            },
          },
        ],
        instructions: [
          {
            instruction:
              'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
            number: 1,
          },
          {
            instruction: 'Add egg and vanilla and mix until combined.',
            number: 2,
          },
          {
            instruction:
              'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
            number: 3,
          },
          {
            instruction:
              'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
            number: 4,
          },
          {
            instruction:
              'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
            number: 5,
          },
          {
            instruction:
              'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
            number: 6,
          },
        ],
        name: 'Loaded Chocolate Chip Pudding Cookie Cups',
        tags: [
          'antipasti',
          'starter',
          'snack',
          'appetizer',
          'antipasto',
          "hor d'oeuvre",
        ],
      },
      {
        id: 678353,
        image: 'https://spoonacular.com/recipeImages/678353-556x370.jpg',
        ingredients: [
          {
            id: 1009016,
            quantity: {
              amount: 1.5,
              unit: 'cups',
            },
          },
          {
            id: 9003,
            quantity: {
              amount: 2,
              unit: '',
            },
          },
          {
            id: 20027,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
          {
            id: 1002046,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
          {
            id: 11215,
            quantity: {
              amount: 1,
              unit: 'clove',
            },
          },
          {
            id: 1012046,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
          {
            id: 19911,
            quantity: {
              amount: 0.25,
              unit: 'cup',
            },
          },
          {
            id: 16112,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
          {
            id: 10010062,
            quantity: {
              amount: 24,
              unit: 'ounce',
            },
          },
          {
            id: 1102047,
            quantity: {
              amount: 4,
              unit: 'servings',
            },
          },
          {
            id: 16124,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
          {
            id: 1016168,
            quantity: {
              amount: 1,
              unit: 'tablespoon',
            },
          },
        ],
        instructions: [
          {
            instruction:
              'Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!',
            number: 1,
          },
        ],
        name: 'Maple Dijon Apple Cider Grilled Pork Chops',
        tags: ['lunch', 'main course', 'main dish', 'dinner'],
      },
      {
        id: 412309,
        image: 'https://spoonacular.com/recipeImages/412309-556x370.jpeg',
        ingredients: [
          {
            id: 1002030,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
          {
            id: 19334,
            quantity: {
              amount: 8,
              unit: 'tablespoons',
            },
          },
          {
            id: 1001,
            quantity: {
              amount: 2,
              unit: 'cups',
            },
          },
          {
            id: 4582,
            quantity: {
              amount: 4,
              unit: 'servings',
            },
          },
          {
            id: 2031,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
          {
            id: 5100,
            quantity: {
              amount: 1,
              unit: 'pound',
            },
          },
          {
            id: 2009,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
          {
            id: 1022020,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
          {
            id: 6168,
            quantity: {
              amount: 8,
              unit: 'cups',
            },
          },
          {
            id: 9176,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 2026,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
          {
            id: 1042047,
            quantity: {
              amount: 1.5,
              unit: 'tablespoons',
            },
          },
          {
            id: 1042047,
            quantity: {
              amount: 4,
              unit: 'teaspoons',
            },
          },
        ],
        instructions: [
          {
            instruction:
              'Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.',
            number: 1,
          },
        ],
        name: "Dirty Steve's Original Wing Sauce",
        tags: ['sauce'],
      },
    ];
    recipe = new Recipe({
      id: 231951,
      image: 'https://spoonacular.com/recipeImages/231951-556x370.jpg',
      ingredients: [
        {
          id: 20027,
          quantity: {
            amount: 2,
            unit: 'tablespoons',
          },
        },
        {
          id: 10019334,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
      ],
      instructions: [
        {
          instruction:
            'Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.',
          number: 1,
        },
      ],
      name: 'Butterscotch Pudding',
      tags: ['side dish'],
    });
  });

  it('should create a new instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a name', () => {
    expect(user.name).to.equal("Saige O'Kon");
  });

  it('should have an id attached to user', () => {
    expect(user.id).to.equal(1);
  });

  it('should have a favorite recipe repo that is an instance of Recipe Repoistory', () => {
    expect(user.favoriteRecipeRepo).to.be.an.instanceOf(RecipeRepository);
  });

  it('should start with no favourite recipes to cook', () => {
    expect(user.favoriteRecipeRepo.allRecipes).to.deep.equal([]);
  });

  it.only('should be able to add a favourite recipe', () => {
    user.addFavoriteRecipe(recipe);
    expect(user.favoriteRecipeRepo.allRecipes).to.deep.equal([recipe]);
  });

  it('should add a recipe user wants to cook', () => {
    user.addRecipesToCook(recipes);
    expect(user.recipesToCook).to.deep.equal([recipes]);
  });

  it('Should have a method that filters by tag and stores the filtered recipes in a property', () => {
    recipeRepo.filterByTag('antipasti');
    expect(recipeRepo.filterByTag('antipasti')).to.deep.equal([
      recipeRepo.allRecipes[0],
    ]);
  });

  it('Should have a method that searches by name and stores the filtered recipes in a property', () => {
    recipeRepo.searchByName('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(
      recipeRepo.searchByName('Loaded Chocolate Chip Pudding Cookie Cups')
    ).to.deep.equal([recipeRepo.allRecipes[0]]);
  });
});
