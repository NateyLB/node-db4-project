const db = require("../data/db-config.js");

module.exports={
getRecipeByIngredient
}

function getRecipeByIngredient(ingredient){
    return db("Recipe_Ingredients")
    .join("Recipes", "Recipe_Ingredients.RecipeID", "=", "Recipes.id")
    .join("Ingredients", "Recipe_Ingredients.IngredientID", "=", "Ingredients.id")
    .select("Recipes.RecipeName")
    .where("Ingredients.IngredientName", ingredient)
}
