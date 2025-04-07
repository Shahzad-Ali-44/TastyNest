import RecipeDetailsItem from "@/components/recipe-details";
async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`, {
        cache: "force-cache", 
      });
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.log(error);
    
  }
}

export default async function RecipeDetails({ params }) {
  const { details } = await params; 
  const getRecipeDetails = await fetchRecipeDetails(details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
