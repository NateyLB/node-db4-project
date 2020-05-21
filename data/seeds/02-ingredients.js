
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {id: 1, IngredientName: 'Carrots'},
        {id: 2, IngredientName: 'Onions'},
        {id: 3, IngredientName: 'Celery'},
        {id: 4, IngredientName: 'Thyme'},
        {id: 5, IngredientName: 'Chicken'},
        {id: 6, IngredientName: 'Butter'},
        {id: 7, IngredientName: 'Heavy-Cream'},
        {id: 8, IngredientName: 'Flour'},
        {id: 9, IngredientName: 'Ice-Water'}
      ]);
    });
};
