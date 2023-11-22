const getMeal = document.querySelector(".main__button");
const mealContainer = document.querySelector(".recipe__wrap");

getMeal.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  let ingredientsHTML = "";
  let additionalIngredientsHTML = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      ingredientsHTML += `<p class="recipe__food-item">${ingredient}</p>`;
    }
  }

  mealContainer.innerHTML = `
    <div class="recipe__in-block">
        <div class="recipe__dish-name">${meal.strMeal}</div>
        <img class="recipe__img" src="${meal.strMealThumb}" alt="dish image" />
        <div class="recipe__description">
          <div class="recipe__country-category">
            <p class="recipe__country">${meal.strArea}</p>
            <p class="recipe__category">${meal.strCategory}</p>
          </div>
          <p class="recipe__text-ingredients">ingredients</p>
        </div>
        <div class="recipe__all-ingredients">
            <div class="recipe__first-ingredients">${ingredientsHTML}</div>
            <div class="textMore">${additionalIngredientsHTML}</div>
          </div>
        <div class="content">
          <p class="how-to-cook"><b>How to cook:</b> ${meal.strInstructions}</p>
        </div>
    </div>
    `;
}
