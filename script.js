/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("touchstart", function(){}, true)

var routes = ["http://bit.ly/2LGL9XJ","http://bit.ly/2t2kE81", "http://bit.ly/2LVUAT4",
  "http://bit.ly/2LSMOcM", "http://bit.ly/2LUOAKl", "http://bit.ly/2LUOXod",
  "http://bit.ly/2LTpY4x", "http://bit.ly/2LTqvDz", "http://bit.ly/2LR3txh",
  "http://bit.ly/2LVY48e", "http://bit.ly/2LVdOrV", "http://bit.ly/2LWmEG1"];

var routeNames = ["Short Perimeter ~ 3.14 Miles", "Botanical Garden ~ 3.84 Miles", "Y Beach Loop ~ 4.00 Miles",
  "Long Perimeter ~ 4.34 Miles", "Dikes Loop (Clockwise) ~ 4.78 Miles", "Dabo Loop ~ 4.83 Miles",
  "Dikes Loop (Counterclockwise) ~ 4.84 Miles", "Golf Course Neighborhoods ~ 5.12 Miles", "Old Central (Clockwise) ~ 6.27 Miles",
  "Old Central (Counterclockwise) ~ 6.27 Miles", "Full Neighborhoods ~ 5.40 Miles" , "Country Walk ~ 6.53 Miles"];

function loadMap(routeNum) {
    $("#rtmap").attr("src", routes[routeNum]);
    $("#rtmap-header").text(routeNames[routeNum]);
    var id = "#" + routeNum
    $(".rt-list .list-group-item").removeClass("active");
    $(id).addClass("active");
}
