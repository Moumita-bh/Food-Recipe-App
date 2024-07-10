export function loadNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <a href="index.html">Home</a>
        <a href="search.html">Search</a>
        <a href="recipeOfTheDay.html">Recipe of the Day</a>
        <a href="randomRecipes.html">Random Recipes</a>
    `;
}

