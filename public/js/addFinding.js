var locatebutton = $('#locate-button');
var submitbutton = $('#submit-button');
var lat;
var lng;

$( document ).ready(function() {
  locatebutton = $('#locate-button');
  submitbutton = $('#submit-button');
  fillBerryOptions();
});

function fillBerryOptions() {
  getBerries(function(berries) {
    let selectform = $("#berryselect");
    console.log(berries);
    for (var i = 0; i < berries.length; i++) {
      console.log(berries[i].name);
      selectform.append('<option>' + berries[i].name + '</option>')
    }
  });
}

function locate() {
  locatebutton.prop('disabled', true);
  submitbutton.prop('disabled', true);
  locatebutton.html("Paikantaa...");

  geoFindMe(function(position) {
    //success
    // gps location showed on map
    var map = getMap();
    lat = position.coords.latitude;
    lng = position.coords.longitude
    var uluru = {lat: lat, lng: lng};
    placeMarker(uluru, map);
    map.setCenter(uluru);
    //enables gps location button again
    locatebutton.innerHTML = "GPS-paikannus";
    locatebutton.prop('disabled', false);
    submitbutton.prop('disabled', false);
  },
  function() {
    //error
    console.log("Unable to retrieve your location");
  });
}

function submit() {
  var berry = $('#berryselect').val();
  if (berry != '(valitse marja)' && berry != '' && marker != null) {
    var lat = marker.getPosition().toJSON().lat;
    var lng = marker.getPosition().toJSON().lng;
    console.log(berry, lat, lng);
    console.log('success');
  }
  else {
    console.log('error');
  }
}
