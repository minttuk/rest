function getBerries(callback) {
  $.get("http://localhost:8888/rest/public/api/berries", function(data, status){
    console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    callback(data);
  });
}

function getBerry(id) {
  return null;
}
