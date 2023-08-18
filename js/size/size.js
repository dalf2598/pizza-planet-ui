import { BASE_URL } from '../constants.js';

fetch(`${BASE_URL}/size/`)
    .then(response => response.json())
    .then(sizes => {
        let rows = sizes.map(element => createSizeTemplate(element));
        let table = $("#sizes tbody");
        table.append(rows);
    });


function createSizeTemplate(size) {
    let template = $("#size-item-template")[0].innerHTML;
    return Mustache.render(template, size);
}
