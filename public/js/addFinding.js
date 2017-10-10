var locatebutton = $('#locate-button');
var submitbutton = $('#submit-button');
var lat;
var lng;

$( document ).ready(function() {
  locatebutton = $('#locate-button');
  submitbutton = $('#submit-button');
  fillBerryOptions();
});

$("#berryselect").click(function() {
  clearMessage();
})

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

function locate() {
  clearMessage()
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
    locatebutton.html("GPS-paikannus");
    locatebutton.prop('disabled', false);
    submitbutton.prop('disabled', false);
  },
  function() {
    //error
    console.log("Unable to retrieve your location");
  });
}

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

function parseInput(input) {
    return $($.parseHTML(input)).text();
}
