
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Directions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Directions').insert([
        {id: 1, RecipeID: 1, Step_Number: 1, Step: 'Preheat oven to 350'},
        {id: 2, RecipeID: 1, Step_Number: 2, Step: 'Save a 1/4 cup of flour. Cut the one cup of the butter into the flour until it resembles clumpy sand, add cold water until the dough is pliable and can be rolled put. Remember to work quick. Roll out into a top and bottom crust. Set in fridge.'},
        {id: 3, RecipeID: 1, Step_Number: 3, Step: 'Dice the onions, celery, and carrots. Sweat them in a pan.'},
        {id: 4, RecipeID: 1, Step_Number: 4, Step: 'Add the chicken, cook until cooked through and browned. Cool and shred chicken.'},
        {id: 5, RecipeID: 1, Step_Number: 5, Step: 'Add the rest of the butter to the pan of veggies and chicken fat, add remaining flour a tablespoon at a time. Add heavy-cream and cook until thick. Add shredded chicken.'},
        {id: 6, RecipeID: 1, Step_Number: 6, Step: 'Line bottom of pie pan with crust making sure the edges are a little high to for the gravy. Add gravy. Add the top crusts and cut slits to let air out'},
        {id: 7, RecipeID: 1, Step_Number: 7, Step: 'Bake for 45 minutes or until golden brown'},  
      ]);
    });
};
