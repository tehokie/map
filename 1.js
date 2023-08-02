// script.js
var mapInitialized = false; // Flag to check if the map has been initialized

// Initialize and display the map
function initMap() {
  if (!mapInitialized) {
    var mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    mapInitialized = true; // Set the flag to true after initializing the map
  }
}
