$("#create").click(() => createRecords());

$("#generate").click(() => {
  $(".report").hide();
  $("#customers tbody").empty();
  $("#ingredients tbody").empty();
  $("#sales tbody").empty();
  getStatistics();
});

function createRecords() {
  fetch("http://127.0.0.1:5000/report/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => showCreateRecordNotification());
}

function showCreateRecordNotification() {
  let orderAlert = $("#report-alert");
  orderAlert.toggle();
  setTimeout(() => orderAlert.toggle(), 5000);
}

function getStatistics() {
  fetch("http://127.0.0.1:5000/report/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json()) // Parse response as JSON
    .then((data) => generateReport(data));
}

function generateReport(data) {
  const customers_rows = data.customers.map((customer, index) => {
    customer.position = index + 1;
    return createCustomerTemplate(customer);
  });

  const ingredients_rows = data.ingredients.map((ingredient, index) => {
    ingredient.position = index + 1;
    return createIngredientTemplate(ingredient);
  });

  const sales_rows = data.sales.map((sale, index) => {
    sale.position = index + 1;
    sale.month = getMonth(sale.month);
    return createSaleTemplate(sale);
  });

  $("#customers tbody").append(customers_rows);
  $("#ingredients tbody").append(ingredients_rows);
  $("#sales tbody").append(sales_rows);

  $(".report").show();
}

function createCustomerTemplate(customer) {
  let template = $("#customer-item-template")[0].innerHTML;
  return Mustache.render(template, customer);
}

function createIngredientTemplate(ingredient) {
  let template = $("#ingredient-item-emplate")[0].innerHTML;
  return Mustache.render(template, ingredient);
}

function createSaleTemplate(sale) {
  let template = $("#sale-item-emplate")[0].innerHTML;
  return Mustache.render(template, sale);
}

function getMonth(dateString) {
  const parts = dateString.split("-");
  const month = parseInt(parts[1]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month >= 1 && month <= 12) {
    return `${months[month - 1]}`;
  } else {
    return "Invalid month";
  }
}
