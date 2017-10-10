// Uses geolocation api to locate 
function geoFindMe(success, error) {
  if (!navigator.geolocation){
    console.log("<p>Geolocation is not supported by your browser</p>");
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
