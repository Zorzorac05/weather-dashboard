

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
function fiveDay(lat,lon){
    //fetch request to get the info from the city based on lattitude and longitude
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=a1898c475b575c98be9beedc38b6ff98&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        //incrimenter
        var x = 1;
        //fills first forcast card
        //gets the next day and displays it
        var d = new Date();
        var strDate = (d.getMonth()+1) + "/" + (d.getDate()+x) + "/" + d.getFullYear();
        $("#dateOne").text(strDate);
        //gets temp of the city and displays it
        var temp = "Temp: " + data.list[x].main.temp + " °F";
        $("#tempOne").text(temp);
        //gets humidity of the city and displays it
        var humidity = "Humidity: " + data.list[x].main.humidity + "%";
        $("#humidityOne").text(humidity);
        //gets wind speed of the city and displays it
        var wind = "Wind speed: " + data.list[x].wind.speed + "mph";
        $("#windOne").text(wind);
        //gets the icon for the weather of the city and displays it
        var icon = data.list[x].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#iconOne').attr('src', iconurl);
        x++;

        //fills second forcast card
        //shows date 2 days out
        strDate = (d.getMonth()+1) + "/" + (d.getDate()+x) + "/" + d.getFullYear();
        $("#dateTwo").text(strDate);
        //gets temp of the city and displays it
        temp = "Temp: " + data.list[x].main.temp + " °F";
        $("#tempTwo").text(temp);
        //gets humidity of the city and displays it
        humidity = "Humidity: " + data.list[x].main.humidity + "%";
        $("#humidityTwo").text(humidity);
        //gets wind speed of the city and displays it
        wind = "Wind speed: " + data.list[x].wind.speed + "mph";
        $("#windTwo").text(wind);
        //gets the icon for the weather of the city and displays it
        icon = data.list[x].weather[0].icon;
        iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#iconTwo').attr('src', iconurl);
        x++;

        //fills out third forcast card
        //shows date 3 days out
        strDate = (d.getMonth()+1) + "/" + (d.getDate()+x) + "/" + d.getFullYear();
        $("#dateThree").text(strDate);
        //gets temp of the city and displays it
        temp = "Temp: " + data.list[x].main.temp + " °F";
        $("#tempThree").text(temp);
        //gets humidity of the city and displays it
        humidity = "Humidity: " + data.list[x].main.humidity + "%";
        $("#humidityThree").text(humidity);
        //gets wind speed of the city and displays it
        wind = "Wind speed: " + data.list[x].wind.speed + "mph";
        $("#windThree").text(wind);
        //gets the icon for the weather of the city and displays it
        icon = data.list[x].weather[0].icon;
        iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#iconThree').attr('src', iconurl);
        x++;

        //shows date 4 days out
        strDate = (d.getMonth()+1) + "/" + (d.getDate()+x) + "/" + d.getFullYear();
        $("#dateFour").text(strDate);
        //gets temp of the city and displays it
        temp = "Temp: " + data.list[x].main.temp + " °F";
        $("#tempFour").text(temp);
        //gets humidity of the city and displays it
        humidity = "Humidity: " + data.list[x].main.humidity + "%";
        $("#humidityFour").text(humidity);
        //gets wind speed of the city and displays it
        wind = "Wind speed: " + data.list[x].wind.speed + "mph";
        $("#windFour").text(wind);
        //gets the icon for the weather of the city and displays it
        icon = data.list[x].weather[0].icon;
        iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#iconFour').attr('src', iconurl);
        x++;

        //shows date 5 days out
        strDate = (d.getMonth()+1) + "/" + (d.getDate()+x) + "/" + d.getFullYear();
        $("#dateFive").text(strDate);
        //gets temp of the city and displays it
        temp = "Temp: " + data.list[x].main.temp + " °F";
        $("#tempFive").text(temp);
        //gets humidity of the city and displays it
        humidity = "Humidity: " + data.list[x].main.humidity + "%";
        $("#humidityFive").text(humidity);
        //gets wind speed of the city and displays it
        wind = "Wind speed: " + data.list[x].wind.speed + "mph";
        $("#windFive").text(wind);
        //gets the icon for the weather of the city and displays it
        icon = data.list[x].weather[0].icon;
        iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        $('#iconFive').attr('src', iconurl);
        
    })
    //5 day needs to show date, icon, temp, wind speed and humidity
}

//function stores info in local storage then updates the history with previously searched results
function store(storedInfo){
    localStorage.setItem(storedInfo.city, JSON.stringify(storedInfo));
}

//this fuction runs on page launch or refresh grabs the citys from local storage and displays them as buttons to click
function displayHistory(){
    var history = Object.keys(localStorage)
    console.log(history);
    for(var i = 0; i < history.length; i++){
        //var temp = localStorage.getItem(history[i]);
        var button = $("<button>");
        var temp = history[i];
        button.text(temp);
        $("#history").append(button);
    }
}

displayHistory();

$("#searchButton").on("click", function() {
    var input = $("#location").val();
    var splitInput = input.split(",");
    var city = splitInput[0];
    var state = splitInput[1]
    var country = splitInput[3];
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + "," + country + "&appid=a1898c475b575c98be9beedc38b6ff98")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        var lat = data[0].lat;
        var lon = data[0].lon;
        var storedInfo = {
            city: city,
            lat: lat,
            lon: lon
        };
        currentDay(lat,lon);
        fiveDay(lat,lon);
        store(storedInfo);
    })
});