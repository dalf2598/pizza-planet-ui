import { BASE_URL } from '../constants.js';

function postIngredient(ingredient) {

    fetch(`${BASE_URL}/ingredient/`, {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(res => res.json())
        .then(res => showNotification());


}

/**
 * Get the form and submit it with fetch API
 */
let ingredientForm = $("#ingredient-form");
ingredientForm.submit(event => {

    let ingredient = getIngredientData();
    postIngredient(ingredient);

    event.preventDefault();
    event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getIngredientData() {

    return {
        name: $("input[name='name']").val(),
        price: $("input[name='price']").val(),
    };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
    let ingredientAlert = $("#ingredient-alert");
    ingredientAlert.toggle();
    setTimeout(() => ingredientAlert.toggle(), 5000);
}