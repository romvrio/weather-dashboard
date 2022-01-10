var userSearchCity = document.querySelector("#search-city")

var getUserCity = function (location) {
    // format the user city url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=&lon={lon} " + location + "&dt={time}&appid=7ef5cfdd6b722810c1c397f2243a81f1";
    //make a request to the Url
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            })
        }
    })
}
