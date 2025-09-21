// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Recipe List</h2>

      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border p-3 rounded flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold">{recipe.title}</h3>
                <p className="text-sm mt-1">
                  {recipe.instructions?.length > 120
                    ? recipe.instructions.slice(0, 120) + "..."
                    : recipe.instructions}
                </p>

                <div className="mt-2 space-x-3">
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    to={`/recipes/${recipe.id}/edit`}
                    className="text-green-600 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </div>

              <DeleteRecipeButton recipeId={recipe.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
