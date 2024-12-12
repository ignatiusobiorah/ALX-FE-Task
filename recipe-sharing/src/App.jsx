import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

import './App.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import RecipeDetails from './components/RecipeDetails';


function App() {
  

  return (
  //     <BrowserRouter>
  //     <Routes>
      
      
  // <Route path="/" element={<AddRecipeForm />} />
  // <Route path="/recipe-list" element={<RecipeList/>} />
  // <Route path="/recipe-details" element={<RecipeDetails />} />

  //     </Routes>
      

  //      </BrowserRouter>

  <div>
      <RecipeList/>
      <AddRecipeForm/>
  </div>
    
  )
}

export default App
