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

function placeMultipleMarker(findings) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < findings.length; i++) {
        var position = new google.maps.LatLng(findings[i].lat, findings[i].long);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map
        });
    }

    //another marker for testing functionality
    var position2 = {lat: 60.1699, lng: 24.9384};
    bounds.extend(position2);
    marker = new google.maps.Marker({
        position: position2,
        map: map
    });

    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);

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
