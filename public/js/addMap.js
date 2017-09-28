var marker;
var map;

function placeMarker(position, map) {
  if (marker == null) {
    marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
  else {
    marker.setPosition(position);
  }
  map.setCenter(position);
}

function placeMultipleMarker(position, map) {
    marker = new google.maps.Marker({
      position: position,
      map: map
  });

}

function initMap() {
  var uluru = {lat: 60.1699, lng: 24.9384};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });

  map.addListener('click', function(e) {
    placeMarker(e.latLng, map);
  });
}

function getMap() {
  return map;
}

function getMarker() {
  return marker;
}
