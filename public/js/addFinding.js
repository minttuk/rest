var locatebutton = $('#locate-button');
var submitbutton = $('#submit-button');
var lat;
var lng;

// Shows berries in the list when document is ready
$( document ).ready(function() {
  locatebutton = $('#locate-button');
  submitbutton = $('#submit-button');
  fillBerryOptions();
});

// Clears the old error message when user is active as in chooses a new berry
$("#berryselect").click(function() {
  clearMessage();
})

// Gets and shows berry options
function fillBerryOptions() {
  getBerries(function(berries) {
    let selectform = $("#berryselect");
    //console.log(berries);
    for (var i = 0; i < berries.length; i++) {
      //console.log(berries[i].name);
      selectform.append('<option>' + berries[i].name + '</option>')
    }
  });
}

// Locates user and shows on map
function locate() {
  clearMessage()
  // Disables buttons while location is taking place and changes location button text into "Paikantaa..."
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
    //enables gps location button again after locating is ready
    locatebutton.html("GPS-paikannus");
    locatebutton.prop('disabled', false);
    submitbutton.prop('disabled', false);
  },
  function() {
    //error
    console.log("Unable to retrieve your location");
  });
}

// Submits a new berry finding
function submitAdd() {
  var berry = $('#berryselect').val();
  if (berry != '(valitse marja)' && berry != '' && positionMarker != null) {
    var lat = positionMarker.getPosition().toJSON().lat;
    var lng = positionMarker.getPosition().toJSON().lng;
    addFinding(berry, lat, lng);
  }
  else {
    showErrormessage("Varmista, että olet valinnut marjan ja asettanut sijainnin.");
  }
}

// Parses input
function parseInput(input) {
    return $($.parseHTML(input)).text();
}
