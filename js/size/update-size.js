import { BASE_URL } from '../constants.js';

function fetchSize(_id) {
    fetch(`${BASE_URL}/size/id/${_id}`)
        .then(response => response.json())
        .then(size => {
            $("#_id").val(size._id);
            $("#name").val(size.name);
            $("#price").val(size.price);
        });
}

function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    fetchSize(_id)
}

function putSize(ingredient) {

    fetch(`${BASE_URL}/size/`, {
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
let ingredientForm = $("#size-form");
ingredientForm.submit(event => {

    let size = getSizeData();
    putSize(size);

    event.preventDefault();
    event.currentTarget.reset();
    setTimeout(() => (window.location.href = "/app/size/sizes.html"), 500);
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
    let ingredientAlert = $("#size-alert");
    ingredientAlert.toggle();
    setTimeout(() => ingredientAlert.toggle(), 5000);
}


window.onload = loadInformation;