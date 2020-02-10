// alert("Hello, JS.");
// var x = 12;
//
// if (something here is true) {
// } else if (something else is true) {
// } else {
// }
//
// var someObject = { name: "Red Lobster", hours: "10-10", rating: 8 };

var restaurants = null;

var button = document.querySelector("#add-button");
console.log("the button", button);

button.onclick = function () {
  // TODO: send the new restaurant to the server
  // 1. capture text from input field
  var restaurantNameInput = document.querySelector("#restaurant-name");
  var restaurantName = restaurantNameInput.value;
  console.log("You entered:", restaurantName);

  // 2. encode the data (url encoded)
  var data = "name=" + encodeURIComponent(restaurantName);

  // 3. fetch (POST): send data to server
  fetch("http://localhost:8080/restaurants", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(function (response) {
    loadRestaurants();
  });
};


function loadRestaurants () {
  fetch("http://localhost:8080/restaurants").then(function (response) {
    response.json().then(function (restaurantsFromServer) {
      // data now ready: loop over restaurants & add to DOM
      restaurants = restaurantsFromServer;

      var restaurantsList = document.querySelector("#restaurants-list");
      restaurants.forEach(function (restaurant) {
        console.log("one restaurant:", restaurant);
        var listItem = document.createElement("li");
        listItem.innerHTML = restaurant;
        restaurantsList.appendChild(listItem);
      });

    });
  });
}

loadRestaurants()
