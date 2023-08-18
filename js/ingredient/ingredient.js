import { BASE_URL } from '../constants.js';

fetch(`${BASE_URL}/ingredient`)
    .then(response => response.json())
    .then(ingredients => {
        let rows = ingredients.map(element => createIngredientTemplate(element));
        let table = $("#ingredients tbody");
        table.append(rows);
    });


function createIngredientTemplate(ingredient) {
    let template = $("#ingredient-item-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}
