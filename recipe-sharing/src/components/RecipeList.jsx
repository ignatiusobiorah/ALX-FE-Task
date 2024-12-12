import { useRecipeStore } from "../store";
//import { useNavigate } from "react-router-dom";

const RecipeList = () => {
   // const navigate = useNavigate()
    const recipes = useRecipeStore(state => state.recipes);
    
  
// const handleEvent =(event, recipe)=>{
//     debugger
//     navigate(`/recipe-details?recipeId=${recipe.id}`)
    
    
// }

  return (
    // <div>
    //     {!recipes.length && <h1>There is no recipe</h1>}
    //     {recipes.length && recipes.map(recipe => (
    //         <div onClick={(event)=>handleEvent(event, recipe)} key={recipe.id}>
    //             <h3>{recipe.title}</h3>
    //             <p>{recipe.description}</p>
    //         </div>
    //     ))}
    // </div>

    <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
    </div>

  );
};

export default RecipeList;