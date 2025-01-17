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

function putSize(size) {

    fetch(`${BASE_URL}/size/`, {
        method: 'PUT',
        body: JSON.stringify(size),
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
let sizeForm = $("#size-form");
sizeForm.submit(event => {

    let size = getSizeData();
    putSize(size);

    event.preventDefault();
    event.currentTarget.reset();
    setTimeout(() => (window.location.href = "/app/size/sizes.html"), 500);
});

function getSizeData() {
    return {
        _id: $("input[id='_id']").val(),
        name: $("input[id='name']").val(),
        price: $("input[id='price']").val()
    };
}

function showNotification() {
    let sizeAlert = $("#size-alert");
    sizeAlert.toggle();
    setTimeout(() => sizeAlert.toggle(), 5000);
}

window.onload = loadInformation;