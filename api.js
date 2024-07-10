const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function searchRecipes(query) {
    try {
        const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

export async function getRecipeOfTheDay() {
    try {
        const response = await fetch(`${BASE_URL}/random.php`);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error('Error fetching recipe of the day:', error);
    }
}

export async function getRandomRecipes() {
    try {
        const response = await fetch(`${BASE_URL}/randomselection.php`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching random recipes:', error);
    }
}
