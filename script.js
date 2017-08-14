$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
var infowindow = new google.maps.InfoWindow();
     var service = new google.maps.places.PlacesService(map);

     service.getDetails({
       placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
     }, function(place, status) {
       if (status === google.maps.places.PlacesServiceStatus.OK) {
         var marker = new google.maps.Marker({
           map: map,
           position: place.geometry.location
         });
         google.maps.event.addListener(marker, 'click', function() {
           infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
             'Place ID: ' + place.place_id + '<br>' +
             place.formatted_address + '</div>');
           infowindow.open(map, this);
         });
       }
     });
   }
