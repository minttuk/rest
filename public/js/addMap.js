var marker;
var map, map2; //map2 in showFindings.html
var infowindow;
var content;

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
    //var infowindow = new google.maps.InfoWindow();
    var berry;
    for (var i = 0; i < findings.length; i++) {
        var position = new google.maps.LatLng(findings[i].lat, findings[i].long);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map2
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                getBerry(findings[i].berry_id, function(selectedBerry){
                    infowindow.setContent(selectedBerry.name);
                    infowindow.open(map2, marker);
                });
            }
        })(marker, i));
    }
    // Automatically center the map fitting all markers on the screen
    map2.fitBounds(bounds);
}


function addOwnLocationMarker(position, map){
    marker = new google.maps.Marker({
        position: position,
        map: map
    });
    addInfoWindowContent(marker, "i", "Oma sijainti");
    map.setCenter(position);
}

function addInfoWindowContent(marker, i, content){
    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(content);
            infowindow.open(map2, marker);
        }
    })(marker, i));
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

//this map2 is used in the showFindings.html page
function initMap2() {
    infowindow = new google.maps.InfoWindow();
    var uluru = {lat: 60.1699, lng: 24.9384};
    map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: uluru
    });
}

function getMap() {
  return map;
}

function getMap2(){
    return map2;
}

function getMarker() {
  return marker;
}
