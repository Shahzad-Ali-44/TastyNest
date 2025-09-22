import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`, {
        cache: "force-cache", 
      });
    
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }
    
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
}

export default async function RecipeDetails({ params }) {
  const { details } = await params; 
  const getRecipeDetails = await fetchRecipeDetails(details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
