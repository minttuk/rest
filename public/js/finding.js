function addFinding(berry, lat, lng) {
    let submitresponse = $("#submitresponse");
    $.ajax({
        type: "POST",
        url: "http://localhost:8888/rest/public/api/findings",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({name: berry, lat: lat, long: lng }),
        success: function () {
          submitresponse.html("Marjalöytö lisätty. Kiitos!");
        },
        error: function (response) {
          console.log(response.responseText);
          submitresponse.html("Jotakin meni pieneen. Yritä myöhemmin uudelleen. :(");
        }
    })
}
