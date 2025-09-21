// src/components/DeleteRecipeButton.jsx
import { useRecipeStore }  from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Delete this recipe?")) return;
    deleteRecipe(recipeId);
    // go back to home after delete
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 px-2 py-1 border rounded ml-2"
      aria-label="Delete recipe"
    >
      Delete
    </button>
  );
}
