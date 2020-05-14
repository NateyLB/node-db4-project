const router = require('express').Router();
const Ingredients = require('./ingredient-model.js')

router.get('/:ingredient/recipes', (req, res)=>{
    //capitalize first char to match the DB
    var ingredient = req.params.ingredient;
    ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
    Ingredients.getRecipeByIngredient(ingredient)
    .then(recipes=>{
        if(recipes.length>0){
            res.status(200).json(recipes)
        }else{
            res.status(404).json({message: "No recipes with that ingredinet exists"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get recipes' });
      });
})



module.exports = router;