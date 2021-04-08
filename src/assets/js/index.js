/*
 ** We have 15 options for ingredients and iterate one by one until the value equals null.
 *
 *  @return Array
 */

function cocktailIngredients(cocktail) {
	const ingredientsArr = [];
	for (let i = 1; i <= 15; ++i) {
		if (cocktail["strIngredient" + i] !== null) {
			ingredientsArr.push(
				`<li class="list-group-item">${cocktail["strIngredient" + i]}</li>`
			);
		} else break;
	}
	return ingredientsArr.join("");
}

document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault(); // Don't submit the form

	const option = document.querySelector("[name=letter]").value; // Watching the input field.

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${option}`)
		.then((result) => result.json()) // from result makes a json
		.then((data) => {
			const cocktailList = data.drinks; //Array from API contains cocktail with choosing a letter
			const markup = cocktailList // Make a markup
				.map(
					(cocktail) => `
                    <div class="card mt-4 mx-auto">
                    <h2 class="card-title  p-2">${cocktail.strDrink}</h2>
                    <img src="${cocktail.strDrinkThumb}"
                    alt="${cocktail.strDrink}"
					class="card-img-top"></img>
                    <p class="  p-2">${cocktail.strAlcoholic}</p>
                    <p class="  p-2">${cocktail.strCategory}</p>
                    <h5 class="card-title  p-2">Ingredients:</h5>
					<ul "list-group list-group-flush  p-2"> ${cocktailIngredients(cocktail)}</ul>
                   
                    <p class=" p-2">${cocktail.strInstructions}</p>
                    </div>
            `
				)
				.join("");
			document.querySelector(".js-cocktails").innerHTML = markup;
		})
		.catch((error) => {
			console.log("Hiba");
			document.querySelector(
				".js-cocktails"
			).innerHTML = `Error: Choose another letter!`;
		});
});
