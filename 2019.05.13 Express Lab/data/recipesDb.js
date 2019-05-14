const recipes = [
    {
        id: 0, 
        name: 'Pancakes', 
        ingredients: [
            '2 cups all-purpose flour',
            '1/4 cup sugar',
            '2 1/4 teaspoons baking powder',
            '1/2 teaspoon baking soda',
            '1/2 teaspoon salt',
            '4 eggs',
            '2 cups buttermilk',
            '1/4 cup melted unsalted butter, plus some for frying',
            '1 cup blueberries, fresh or frozen',
            'Serving suggestions: whipped cream and maple syrup',
        ],
        instructions: [
            'In a large bowl sift together the flour, sugar, baking powder, baking soda, and salt.', 
            'Beat the eggs with the buttermilk and melted butter. Combine the dry and the wet ingredients into a lumpy batter, being careful not to over mix.', 
            'Heat some butter in a skillet over medium heat. Spoon 1/3 cup of batter into the skillet and sprinkle the top with some of the blueberries. Cook for 2 to 3 minutes on each side.', 
            'Serve with a dollop of whipped cream and maple syrup.',
        ],
        extraInfo: 'https://www.youtube.com/watch?v=2iWUUcW08ac'
    },
    {
        id: 1, 
        name: 'Pan-Roasted Chicken Thighs', 
        ingredients: [
            '6 skin-on, bone-in chicken thighs (about 2 1/4 pounds)',
            'Kosher salt and freshly ground black pepper',
            '1 tablespoon vegetable oil'
        ],
        instructions: [
            'Preheat oven to 475°F.',
            'Season chicken with salt and pepper.',
            'Heat oil in a 12" cast-iron or heavy nonstick skillet over high heat until hot but not smoking.',
            'Nestle chicken in skillet, skin side down, and cook 2 minutes',
            'Reduce heat to medium-high; continue cooking skin side down, occasionally rearranging chicken thighs and rotating pan to evenly distribute heat, until fat renders and skin is golden brown, about 12 minutes',
            'Transfer skillet to oven and cook 13 more minutes.',
            'Flip chicken; continue cooking until skin crisps and meat is cooked through, about 5 minutes longer.',
            'Transfer to a plate; let rest 5 minutes before serving.',
        ],
        extraInfo: 'https://www.epicurious.com/recipes/food/views/perfect-pan-roasted-chicken-thighs-365489'
    },
    {
        id: 2, 
        name: 'Goulash', 
        ingredients: [
            '4 tbsp olive oil',
            '2 1/2 lbs stewing beef lean, cut into 1 inch pieces',
            '1 tsp salt or to taste',
            '1 tsp pepper or to taste',
            '2 large onions roughly chopped',
            '5 cloves garlic minced',
            '3 tbsp sweet paprika',
            '1 tsp caraway seeds ground',
            '1 tsp oregano dried',
            '3 bay leaves',
            '1 tsp brown sugar',
            '1/2 cup tomato sauce',
            '2 tbsp balsamic vinegar',
            '4 cups beef broth no salt added',
            '2 tbsp parsley chopped, for garnish',
        ],
        instructions: [
            'Heat a large deep skillet or Dutch oven over high heat then add the olive oil.',
            'When the oil is hot add the stewing beef. Season with salt and pepper and sear the beef until it starts to brown. The beef will release liquid so continue searing on high heat, and the liquid will evaporate. Alternatively you could drain all the liquid.',
            'Add the onions and garlic to the skillet and cook for about 5 minutes until the onions soften and become translucent. Turn the heat down to medium-high.',
            'Add the paprika, caraway seeds, oregano, bay leaves and brown sugar to the skillet. Stir everything together and cook for 30 seconds. ',
            'Add the tomato sauce, balsamic vinegar, beef broth and stir. Bring to a boil, then cover and cook on low for about 2 hours or until the beef is fork tender, stirring occasionally. The liquid will reduce down a lot as the beef cooks, so feel free to add more water as needed.',
            'Taste for seasoning and adjust with salt and pepper if needed.',
            'Garnish with chopped parsley and serve over noodles or mashed potatoes.',
        ],
        extraInfo: 'https://www.jocooks.com/recipes/hungarian-goulash/'
    }
];

module.exports = {
    getOne: function(recipeId) {
        return recipes[recipeId];
    },
    getAll: function() {
        return recipes;
    }
}

