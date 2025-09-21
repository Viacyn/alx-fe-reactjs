// src/components/RecipeDetails.jsx
import { useParams, Link } from "react-router-dom";
import { useRecipeStore }  from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === id)
  );

  if (!recipe) {
    return (
      <div className="p-4">
        <p>Recipe not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">{recipe.title}</h1>
      <p className="mb-4 whitespace-pre-line">{recipe.instructions}</p>

      <div className="space-x-3">
        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="text-green-600 hover:underline"
        >
          Edit
        </Link>

        <DeleteRecipeButton recipeId={recipe.id} />

        <Link to="/" className="text-gray-600 hover:underline">
          Back
        </Link>
      </div>
    </div>
  );
}
