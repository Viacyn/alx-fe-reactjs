// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function Home() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="bg-gray-100 p-4">
        <div className="max-w-xl mx-auto">
          <Link to="/" className="font-bold">Home</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </>
  );
}
