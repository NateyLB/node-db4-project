
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe_Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe_Ingredients').insert([
        {id: 1, RecipeID:1 , IngredientID:1 ,Quantity:2, Measure: 'whole'},
        {id: 2, RecipeID:1 , IngredientID:2 ,Quantity:1, Measure: 'whole'},
        {id: 3, RecipeID:1 , IngredientID:3 ,Quantity:2, Measure: 'whole'},
        {id: 4, RecipeID:1 , IngredientID:4 ,Quantity:1, Measure: 'sprig'},
        {id: 5, RecipeID:1 , IngredientID:5 ,Quantity:4, Measure: 'thighs'},
        {id: 6, RecipeID:1 , IngredientID:6 ,Quantity:1.25, Measure: 'cups'},
        {id: 7, RecipeID:1 , IngredientID:7 ,Quantity:1, Measure: 'cup'},
        {id: 8, RecipeID:1 , IngredientID:8 ,Quantity:1.75, Measure: 'cups'},
        {id: 9, RecipeID:1 , IngredientID:9 ,Quantity:.75, Measure: 'cup'},
      ]);
    });
};
