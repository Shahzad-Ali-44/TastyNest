import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes", {
      cache: "force-cache", 
    });
    
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }
    
    const data = await apiResponse.json();
    return data?.recipes || [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  return <RecipeList recipeList={recipeList} />;
}
