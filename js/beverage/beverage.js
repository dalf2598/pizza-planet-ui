import { BASE_URL } from '../constants.js';

fetch(`${BASE_URL}/beverage/`)
    .then(response => response.json())
    .then(beverages => {
        let rows = beverages.map(element => createBeverageTemplate(element));
        let table = $("#beverages tbody");
        table.append(rows);
    });


function createBeverageTemplate(beverage) {
    let template = $("#beverage-item-template")[0].innerHTML;
    return Mustache.render(template, beverage);
}
