function addFinding(berry, lat, lng) {
    console.log(berry, lat, lng);
    $.ajax({
        type: "POST",
        url: "http://localhost:8888/rest/public/api/findings",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({name: berry, lat: lat, long: lng }),
        success: function () {
          console.log("Thanks!");
        }
    })
}
