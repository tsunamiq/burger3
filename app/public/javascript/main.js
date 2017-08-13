$(document).ready(function(){
    startMenuCall();
    grabsUserData();
//Grabs user data and appends it to the page
function grabsUserData() {
      var user_id = parseInt(localStorage.getItem("user_id"));
    $.get({
        url: "/api/users/",
        method: "GET"
    }).done(function(response) {
      
        var userArrayIndex = 0;
        console.log("==================================================")
        console.log("user ID from local storage: " + user_id)
        console.log("==================================================")
        console.log("user response from DB:");
        console.log(response);
        console.log("response length " + response.length )
        console.log(typeof(user_id))
        //filter user array for correct user
        for(var i = 0; i<response.length; i++){
            if(response[i].id === user_id){
                userArrayIndex = i;
                
            }
        }
        console.log("==================================================")
        console.log("userArrayIndex: " + userArrayIndex)
        //diplay user calor info
        $("#user-name-1").text(response[userArrayIndex].first_name +" "+ response[userArrayIndex].last_name);
        console.log("User information: ");
        console.log(response[userArrayIndex]);
    });
};
//Attaches on-click events for menu items
function startMenuCall () {
        $.get({
            url: "/api/restaurant",
            method: "GET"
        }).done(function(response) {
            console.log(response);
            console.log(response[0].restaurant);
            for (i=0; i < 300; i = i +25) {
                //Creates the display container and adds all the columns
                //to contain the data for that entry/item
                var restaurantDiv = $("<div></div>");
                $(restaurantDiv).attr("class", "row");
                $(restaurantDiv).attr("id", "results-display");
                var spacerColumn = $("<div></div>");
                $(spacerColumn).attr("class", "col s1");
                var restaurantColumn = $("<div></div>");
                $(restaurantColumn).attr("class", "col s3");
                var itemColumn = $("<div></div>");
                $(itemColumn).attr("class", "col s2");
                var priceColumn = $("<div></div>");
                $(priceColumn).attr("class", "col s2");
                var caloriesColumn = $("<div></div>");
                $(caloriesColumn).attr("class", "col s2");
                var priceColumn = $("<div></div>");
                $(priceColumn).attr("class", "col s2");
                var locationColumn = $("<div></div>");
                $(locationColumn).attr("class", "col s2");
                //Writes the data into each column
                $(restaurantColumn).text(response[i].restaurant);
                $(itemColumn).text(response[i].item);
                $(caloriesColumn).text(response[i].calories);
                $(priceColumn).text(response[i].price);
                $(locationColumn).text("6265 Greenwich Ave");
                //Appends each column to the display container div
                $(restaurantDiv).append(spacerColumn);
                $(restaurantDiv).append(restaurantColumn);
                $(restaurantDiv).append(itemColumn);
                $(restaurantDiv).append(caloriesColumn);
                $(restaurantDiv).append(priceColumn);
                $(restaurantDiv).append(locationColumn);
                console.log(restaurantDiv);
                
                //Adds price and calorie values to each div
                $(restaurantDiv).attr("calories", response[i].calories);
                $(restaurantDiv).attr("price", response[i].price);
                $(restaurantDiv).attr("item", response[i].item);
                $(restaurantDiv).attr("restaurant", response[i].item);
                $("#search-submit-shadow").append(restaurantDiv);
                //Adds on-click events to each div
                $(restaurantDiv).on("click",function(){
                    var calorieValue = parseInt($(this).attr("calories"));
                    console.log(calorieValue);
                    var priceValue = parseInt($(this).attr("price"));
                    console.log(priceValue);
                    var beforeCaloriesLeft = parseInt($("#calories-left-1").text());
                    var afterCaloriesLeft = beforeCaloriesLeft - calorieValue;
                    console.log(afterCaloriesLeft);
                    if (afterCaloriesLeft < 0) {
                        var alertDiv = $("<div id='alertDiv'>That would put you over your calorie limit! Ahhh!!! Learn some self-control!!!!</div>");
                        $("body").append(alertDiv);
                        setTimeout(function() {$(alertDiv).css("visibility", "hidden")}, 2000)
                    } else {
                    $("#calories-left-1").text(afterCaloriesLeft);
                    console.log(afterCaloriesLeft);
                    var beforeCaloriesConsumed = parseInt($("#user-calories-consumed-1").text());
                    var afterCaloriesConsumed = beforeCaloriesConsumed + calorieValue;
                    $("#user-calories-consumed-1").text(parseInt(afterCaloriesConsumed));
                    var itemName = $(this).attr("item");
                    var price = $(this).attr("price");
                    var itemNamediv = $("<div></div>");
                    itemNamediv.append(itemName);
                    itemNamediv.append($("<br>"));
                    itemNamediv.append(price);
                    $("#selected-item-display").append(itemNamediv);
                    var consumption = {
                    user_id: 1,
                    food_name: itemName,
                    calorie: calorieValue,
                    cost: priceValue 
                    }
             
                //Appends the display container div to the page container
            }
                })
    }
        })
}
});