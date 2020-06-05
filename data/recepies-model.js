const db = require('../db-config')

const getRecepies = async () => {
   const recepies = await db('recipies')
   return recepies
}

const getShoppingList = async (recipie_id) => {
    const shoppingList = await db('recipie_ingredients').where({recipie_id})
    return shoppingList
}

const getInstructions = async (recipie_id) => {
    const instructions = await db('steps').where({recipie_id})
    return instructions
}

module.exports = {
    getRecepies,
    getShoppingList,
    getInstructions
}