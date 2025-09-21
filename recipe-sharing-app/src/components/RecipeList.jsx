// src/components/RecipeList.jsx
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const listToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {listToShow.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
