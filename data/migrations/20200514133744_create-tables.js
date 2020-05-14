
exports.up = function(knex) {
    return knex.schema
    .createTable("Recipes", recipes =>{
        recipes.increments();
        recipes.string("RecipeName").notNullable();
    })
    .createTable("Ingredients", ingredients =>{
        ingredients.increments();
        ingredients.string("IngredientName").notNullable();
    })
    .createTable("Directions", directions=>{
        directions.increments();
        directions
        .integer("RecipeID")
        .unsigned()
        .notNullable()
        .references("Recipes.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
        directions.integer("Step_Number").notNullable();
        directions.string("Step").notNullable();
    })
    .createTable("Recipe_Ingredients", recipeIngredients=>{
        recipeIngredients.increments()
        
        recipeIngredients
            .integer("RecipeID")
            .unsigned()
            .notNullable()
            .references("Recipes.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");

        recipeIngredients
            .integer("IngredientID")
            .unsigned()
            .notNullable()
            .references("Ingredients.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        recipeIngredients.float("Quantity").notNullable();
        recipeIngredients.string("Measure").notNullable();
    })

  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Recipe_Ingredients")
        .dropTableIfExists("Directions")
        .dropTableIfExists("Ingredients")
        .dropTableIfExists("Recipes")
};
