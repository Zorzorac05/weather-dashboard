//"https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=a1898c475b575c98be9beedc38b6ff98"
//https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + state + "," + country + "&appid=a1898c475b575c98be9beedc38b6ff98
//geo gets coridnates then need to put into the above one

//function to the current weather info of the city then display it
function currentDay(lat,lon){
    //fetch request to get the info from the city based on lattitude and longitude
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=a1898c475b575c98be9beedc38b6ff98&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //gets the name of the city and displays it
        var location = "City: " + data.city.name;
        $("#city").text(location);
        //gets the date and displays it
        var d = new Date();
        var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
        $("#date").text(strDate);
        //gets temp of the city and displays it
        var temp = "Temp: " + data.list[0].main.temp + " °F";
        $("#temp").text(temp);
        //gets humidity of the city and displays it
        var humidity = "Humidity: " + data.list[0].main.humidity + "%";
        $("#humidity").text(humidity);
        //gets wind speed of the city and displays it
        var wind = "Wind speed: " + data.list[0].wind.speed + "mph";
        $("#wind").text(wind);
        //gets the icon for the weather of the city and displays it
        var icon = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#icon').attr('src', iconurl);
    })
}

//function to get the forcast for next 5 days
function fiveDay(){

    //5 day needs to show date, icon, temp, wind speed and humidity
}


$("#searchButton").on("click", function() {
    var input = $("#location").val();
    var splitInput = input.split(",");
    var city = splitInput[0];
    var state = splitInput[1]
    var country = splitInput[3];
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + country + "&appid=a1898c475b575c98be9beedc38b6ff98")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        var lat = data[0].lat;
        var lon = data[0].lon;
        currentDay(lat,lon);
    })
});