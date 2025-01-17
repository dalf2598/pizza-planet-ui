import { BASE_URL } from '../constants.js';

function fetchIngredient(_id) {
    fetch(`${BASE_URL}/ingredient/id/${_id}`)
        .then(response => response.json())
        .then(ingredient => {
            $("#_id").val(ingredient._id);
            $("#name").val(ingredient.name);
            $("#price").val(ingredient.price);

        });
}

function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    fetchIngredient(_id)
}

function putSize(ingredient) {

    fetch(`${BASE_URL}/ingredient/`, {
        method: 'PUT',
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

    let ingredient = getSizeData();
    putSize(ingredient);

    event.preventDefault();
    event.currentTarget.reset();
    setTimeout(() => window.location.href = '/app/ingredient/ingredients.html', 500);
});

/**
 * Gets the ingredient data with JQuery
 */
function getSizeData() {
    return {
        _id: $("input[id='_id']").val(),
        name: $("input[id='name']").val(),
        price: $("input[id='price']").val()
    };
}

/**
 * Shows a notification when the ingredient is accepted
 */
function showNotification() {
    let ingredientAlert = $("#ingredient-alert");
    ingredientAlert.toggle();
    setTimeout(() => ingredientAlert.toggle(), 5000);
}


window.onload = loadInformation;