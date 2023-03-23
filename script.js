const getMeal = document.getElementById("get-meal");
const mealContainer = document.getElementById("card-box");

getMeal.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  mealContainer.innerHTML = `
    <div class="in-block">
        <div class="dish-name">${meal.strMeal}</div>
           <img class="img" src="${meal.strMealThumb}" alt="dish image" />  
              <div class="description">
                <div class="country-category">
                  <p class="country">${meal.strArea}</p>
                  <p class="category">${meal.strCategory}</p>
                </div>
                <div class="allIngredients">
                    <p class="text-ingred">Ingredients: </p>
                  <div class="ingredients">
                    <p class="food-item">${meal.strIngredient1} </p>
                    <p class="food-item">${meal.strIngredient2} </p>
                    <p class="food-item">${meal.strIngredient3} </p>
                    <p class="food-item">${meal.strIngredient4} </p> 
                    <p class="food-item">${meal.strIngredient5} </p>
                  </div>
                  <div class="textMore">
                    <p class="food">${meal.strIngredient6} </p>
                    <p class="food">${meal.strIngredient7} </p>
                    <p class="food">${meal.strIngredient8} </p>
                    <p class="food">${meal.strIngredient9} </p>
                    <p class="food">${meal.strIngredient10} </p>
                    <p class="food">${meal.strIngredient11} </p>
                    <p class="food">${meal.strIngredient12} </p>
                    <p class="food">${meal.strIngredient13} </p>
                  </div>
                    <button class="showBtn">more ingredients</button>
               </div>                    
            </div>
        <div class="content">
          <p class="how-to-cook"><b>How to cook:</b> ${meal.strInstructions}</p>
        </div>
    </div>
    `;

  /* More ingredients */

  const textMore = document.querySelector(".textMore");
  const showBtn = document.querySelector(".showBtn");

  showBtn.addEventListener("click", () => {
    textMore.classList.toggle("toggle");
    if (showBtn.innerHTML === "less ingredients") {
      showBtn.innerHTML = "more ingredients";
      showBtn.style.backgroundColor = "rgb(151, 186, 62)";
      showBtn.style.color = "rgb(18, 117, 26)";
    } else {
      showBtn.innerHTML = "less ingredients";
      showBtn.style.backgroundColor = "rgb(18, 117, 26)";
      showBtn.style.color = "rgb(151, 186, 62)";
    }
  });

  /* Read more */
  let more = document.querySelectorAll("more");
  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function () {
      more[i].parentNode.classList.toggle("active");
    });
  }
}
