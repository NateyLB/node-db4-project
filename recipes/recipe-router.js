const router = require('express').Router();
const Recipes = require('./recipe-model.js')

router.get('/', (req, res)=>{
    Recipes.getRecipes()
    .then(recipes=>{
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get recipes' });
      });
})

router.get('/:id/shoppingList', (req, res)=>{
    Recipes.getShoppingList(req.params.id)
    .then(shoppingList=>{
        res.status(200).json(shoppingList)
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get shopping list' });
      });
})

router.get('/:id/instructions', (req, res)=>{
    Recipes.getInstructions(req.params.id)
    .then(instructions=>{
        res.status(200).json(instructions)
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get instructions' });
      });
})

module.exports = router;