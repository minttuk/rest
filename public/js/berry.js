function getBerries(callback) {
    $.get(address +"/berries", function(data, status){
      console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      callback(data);
  });

}

/*function getBerry(id) {
  return null;
}*/

function getBerry(id, callback) {
    $.get(address + "/berries/"+id, function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        callback(data);
    });

}
