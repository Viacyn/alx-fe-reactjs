// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === id)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setInstructions(recipe.instructions || "");
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="p-4">
        <p>Recipe not found.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, {
      title: title.trim(),
      instructions: instructions.trim(),
    });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 border rounded"
    >
      <h2 className="text-lg font-bold mb-2">Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
