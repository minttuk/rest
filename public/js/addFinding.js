var locatebutton = document.getElementById('locate-button');

function locate() {
  locatebutton.disabled = true;
  locatebutton.innerHTML = "Paikantaa...";

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    locatebutton.innerHTML = "GPS-paikannus";
    locatebutton.disabled = false;
    console.log('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

  }

  geoFindMe(function(position) {
    var map = getMap();
    locatebutton.innerHTML = "GPS-paikannus";
    locatebutton.disabled = false;
    var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
    map.setCenter(uluru);
    placeMarker(uluru, map);
  },
  function() {
    console.log("Unable to retrieve your location");
  });
}
