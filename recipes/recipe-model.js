const db = require("../data/db-config.js");

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes(){
    return db("Recipes")
}

function getShoppingList(recipeID){
    return db("Recipe_Ingredients")
    .join("Recipes", "Recipe_Ingredients.RecipeID", "=", "Recipes.id")
    .join("Ingredients", "Recipe_Ingredients.IngredientID", "=", "Ingredients.id")
    .select("Ingredients.IngredientName", "Recipe_Ingredients.Quantity", "Recipe_Ingredients.Measure")
    .where("Recipe_Ingredients.RecipeID", recipeID)
    
}

function getInstructions(recipeID){
    return db("Directions").where("Directions.RecipeID", recipeID).orderBy("Step_Number")
}