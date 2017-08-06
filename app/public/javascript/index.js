//Grabs user data from the database
function startMenuCall () {
    $.ajax({
        url: "heroku.app.com",
        method: "GET"
    }).done(function(response) {
        console.log(response);    
        });
    };

//Appends elements to the Home overlay
function placeElementsOnHomeOverlay(username, calories, caloriesAllowed) {
    var user = $("<p>"+username+"</p>").attr({id: "user"});
    $("#search-submit-shadow").append(user);
    var caloriesConsumed = $("<p>Calories consumed: "+calories+"</p>").attr({id: "calories-consumed"});
    $("#search-submit-shadow").append(caloriesConsumed);
    var caloriesAllowed = $("<p>Daily calorie intake: "+caloriesAllowed+"</p>").attr({id: "calories-allowed"});
    $("#search-submit-shadow").append(caloriesAllowed);
    var search = $('<input/>').attr({ type: "text", name:"search", value:"Search", id: "menu-search"});
    $("#search-submit-shadow").append(search);
    var filter = $('<div/>').attr({id: "filter-search"});
    filter.html("Filters:");
    $("#search-submit-shadow").append(filter);
    addFilters();
    }

//Adds the filters options next to the search bar
function addFilters() {
    var filterRestaurants = $('<div/>').attr({id: "filter-restaurants"});
    filterRestaurants.html("Restaurants");
    $("#filter-search").append(filterRestaurants);
    var filterCalories = $('<div/>').attr({id: "filter-calories"});
    filterCalories.html("Calories");
    $("#filter-search").append(filterCalories);
    var filterPrice = $('<div/>').attr({id: "filter-price"});
    filterPrice.html("Price");
    $("#filter-search").append(filterPrice);
    }

$(document).ready(function(){
    //Opens the start button, expands into the search overlay
    $("#search-submit-shadow").click(function() {
        event.preventDefault();
        $(this).animate({height: "50%", width: "70%", top: "10%", left: "15%", sopacity:"0.7"});
        $("#home-prompt-1").animate({opacity:"0"});
        $("#home-prompt-2").animate({opacity:"0"});
        $("#search-submit").animate({opacity:"0"});
        $("#search-submit-shadow").animate({opacity:"0.7"});

        //Runs first API call
        startMenuCall();

        //Populate the overlay page
        placeElementsOnHomeOverlay("Bob Jones", 100, 2500);
        
        //Prevents re-clicks
        $("#search-submit-shadow").off();
        });
    });