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
  for (let i = 1; i <= 13; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      if (i <= 5) {
        ingredientsHTML += `<p class="recipe__food-item">${ingredient}</p>`;
      } else {
        additionalIngredientsHTML += `<p class="recipe__food-item">${ingredient}</p>`;
      }
    }
  }

  const showMoreButton = `<button class="showBtn">more ingredients</button>`;

  mealContainer.innerHTML = `
    <div class="recipe__in-block">
        <div class="recipe__dish-name">${meal.strMeal}</div>
        <img class="recipe__img" src="${meal.strMealThumb}" alt="dish image" />
        <div class="recipe__description">
          <div class="recipe__country-category">
            <p class="recipe__country">${meal.strArea}</p>
            <p class="recipe__category">${meal.strCategory}</p>
          </div>
          <div class="recipe__all-ingredients">
          <p class="recipe__text-ingredients">ingredients</p>
            <div class="recipe__first-ingredients">${ingredientsHTML}</div>
            <div class="textMore" style="display: none;">${additionalIngredientsHTML}</div>
            ${ingredientsHTML.length > 5 ? showMoreButton : ""}
          </div>
        </div>
        <div class="content">
          <p class="how-to-cook"><b>How to cook:</b> ${meal.strInstructions}</p>
        </div>
    </div>
    `;

  if (ingredientsHTML.length > 5) {
    const ingredientsContainer = mealContainer.querySelector(".ingredients");
    const textMoreContainer = mealContainer.querySelector(".textMore");
    const showMoreBtn = mealContainer.querySelector(".showBtn");

    showMoreBtn.addEventListener("click", () => {
      textMoreContainer.style.display =
        textMoreContainer.style.display === "none" ? "block" : "none";
      showMoreBtn.innerText =
        textMoreContainer.style.display === "none"
          ? "more ingredients"
          : "less ingredients";
    });
  }
}
