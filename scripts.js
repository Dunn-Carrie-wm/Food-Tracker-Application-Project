
var nameInput = document.getElementById("food");
var descInput = document.getElementById("description");
var dateInput = document.getElementById("dateOf");
var lifeInput = document.getElementById("shelfLife");
var expInput = document.getElementById("date");


var tableOutput = document.getElementById("table");

function update() {
    var newItem = getInputItem();
    updateTable(newItem);
}


function getInputItem() {
    var item = {
        food: nameInput.value,
        description: descInput.value,
        dateOf: dateInput.value,
        shelfLife: lifeInput.value,
        date: expInput.value
    };
    return item;
}

function updateTable(item) {
    if(item.food == "" || item.description == "" || item.dateOf == "" || item.shelfLife == "" || item.date == "") return;


    var tablerow = document.createElement("tr");
    var food = document.createElement("td");
    var description = document.createElement("td");
    var dateOf = document.createElement("td");
    var shelfLife = document.createElement("td");
    var date = document.createElement("td");

    food.innerHTML = item.food;
    description.innerHTML = item.description;
    dateOf.innerHTML = item.dateOf;
    shelfLife.innerHTML = item.shelfLife;
    date.innerHTML = item.date;


    if(parseFloat(item.shelfLife) < 3) tablerow.style.backgroundColor = "lightBlue";

    tablerow.appendChild(food);
    tablerow.appendChild(description);
    tablerow.appendChild(dateOf);
    tablerow.appendChild(shelfLife);
    tablerow.appendChild(date);
    tableOutput.appendChild(tablerow);
}