// import { useRecipeStore } from "../store";
// import { useState } from "react";
// import { useSearchParams } from 'react-router-dom'
// const RecipeDetails = () => {
//     const [searchParams] = useSearchParams();
//     const recipeId = searchParams.get("recipeId");
//     const [isEditOn, setIsEditOn] = useState(false)
//     const recipe = useRecipeStore(state => state.recipes)
//     const [selectedItem, setSelectedItem] = useState(null)

//     useState(()=>{
// const item = recipe.find(item=>item.id ===recipeId)
// setSelectedItem(item)
//     },[recipe])
    
//     console.log(recipeId)
//     console.log(recipe)
//     const editRecipe = useRecipeStore(state => state.addRecipe);

//     const handleEditItem = (value)=>{
//         setIsEditOn (editStatus=>!editStatus)
//         if(!isEditOn){
//             editRecipe(value)
//         }
//         return false
//     }
//     const handleDeleteItem = (value)=>{}

//   return (
//     <>
//     <div>
//         {selectedItem?.toString()}
//         {isEditOn? <input type="text" value={selectedItem?.title}/> :<h1>{selectedItem?.title}</h1>}
//         {isEditOn? <input type="text" value={selectedItem?.description}/> :<p>{selectedItem?.description}</p>}

//     </div>
//     <button onClick={()=>handleEditItem(selectedItem)} >{isEditOn? 'Save' : 'Edit'} </button>
//     <button onClick={()=>handleDeleteItem(selectedItem)}>Delete</button>
//     </>
//   );
// };

// export default RecipeDetails;