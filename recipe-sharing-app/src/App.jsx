// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route shows Add form + List */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          {/* Details page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          {/* Edit page */}
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
