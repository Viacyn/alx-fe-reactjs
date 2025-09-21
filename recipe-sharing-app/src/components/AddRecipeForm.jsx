// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const addRecipe = useRecipeStore((s) => s.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addRecipe({ title: title.trim(), instructions: instructions.trim() });
    setTitle("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <h2 className="text-lg font-bold mb-2">Add a Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
}
