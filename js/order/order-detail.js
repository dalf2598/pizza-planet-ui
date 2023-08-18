import { BASE_URL } from '../constants.js';

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

fetch(`${BASE_URL}/order/id/${_id}`)
    .then(response => response.json())
    .then(order => {
        let template = createRowTemplate(order);
        $("#order").append(template);
    })
    .then(
        () => {
            hideElementsWithoutLetters('size');
            hideElementsWithoutLetters('ingredients');
            hideElementsWithoutLetters('beverages')
        }
    );

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
    let template = $("#order-template")[0].innerHTML;
    return Mustache.render(template, order);
}

function hideElementsWithoutLetters(tdId) {
  $("#" + tdId)
    .find("p")
    .each(function () {
      var hasLetters = /[a-zA-Z]/.test($(this).text());
      if (!hasLetters) {
        $(this).hide();
      }
    });
}