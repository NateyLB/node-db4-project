const db = require("../data/db-config.js");

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions, 
    getRecipeByID
};

function getRecipes(){
    return new Promise((resolve, reject)=>{
        db("Recipes")
        .then(async recipes=>{
            const recipePromises = recipes.map(async recipe=>{
                    const responses = await Promise.all([getShoppingList(recipe.id), getInstructions(recipe.id)]) 
                    return({
                        recipeID: recipe.id, recipeName: recipe.RecipeName, ingredients: responses[0], instructions: responses[1]
                    })
            })
            const recipeResults = await Promise.all(recipePromises);
            if(recipeResults.length>0){
                resolve(recipeResults)
            }else{
                const errorObject={message: "Could not get recipes"}
                reject(errorObject)
            }
        })
    })
};

function getShoppingList(recipeID){
    return db("Recipe_Ingredients")
    .join("Recipes", "Recipe_Ingredients.RecipeID", "=", "Recipes.id")
    .join("Ingredients", "Recipe_Ingredients.IngredientID", "=", "Ingredients.id")
    .select("Ingredients.IngredientName", "Recipe_Ingredients.Quantity", "Recipe_Ingredients.Measure")
    .where("Recipe_Ingredients.RecipeID", recipeID)
    
};

function getInstructions(recipeID){
    return db("Instructions").where("Instructions.RecipeID", recipeID).orderBy("Step_Number")
};

function getRecipeByID(recipeID){
    return new Promise((resolve, reject)=>{
        Promise.all([db("Recipes").where("id", recipeID).first(),getShoppingList(recipeID),getInstructions(recipeID)])
        .then(values=>{
            if(values){
                resolve({recipeID: values[0].id, recipeName:values[0].RecipeName,ingredients:values[1], instructions:values[2]})
            }else{
                const errorObject = {message: "Could not get that recipe"}
                reject(errorObject)
            }
        })
    })
}