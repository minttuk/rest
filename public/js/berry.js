function getBerries(callback) {
  //$.get("http://localhost:8888/rest/public/api/berries", function(data, status){ //Sainin localhost
    //$.get("http://localhost/rest/public/api/berries", function(data, status){ //Mintun localhost
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


