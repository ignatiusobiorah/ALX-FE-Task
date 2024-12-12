import { create } from "zustand";

export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    //deleteItem: (recipe) => set(state=>({recipes:[...state.recipes.filter(item=>item.id !== recipe.id)]})),
    //editedItemItem: (editedItem) => set(state=> ({recipes: [...state.recipe.map((item, index) => item.id === editedItem.id ? state.recipe.splice(index, editedItem, 1) : item) ]})),
    // fetchOne: (id) => set(state=> (state.recipes.find(elem=>elem.id === id)))
   
}));
