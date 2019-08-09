var currentWeather = {};  // global JSON for hourly weather

function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);  // call its open method
    return xhr;
  }
  
  // Make the actual CORS request.
  function makeCorsRequest(searchText) {

    let city_name = document.getElementById("search_city").value;

    current = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=imperial&APPID=7e12480e71b58d897c1af4bf18361b1d";

    let xhrCurr = createCORSRequest('GET', current);
  
    // checking if browser does CORS
    if (!xhrCurr) {
      alert('CORS not supported');
      return;
    }
  
    // Load some functions into response handlers.
    xhrCurr.onload = function() {
        let responseStr = xhrCurr.responseText;  // get the JSON string 
        currentWeather = JSON.parse(responseStr);  // turn it into an object
        //console.log("Current\n");
        console.log(JSON.stringify(currentWeather, undefined, 2));  // print it out as a string, nicely formatted
        //console.log("\n");    
        replaceCurrentWeather();

    };
  
    xhrCurr.onerror = function() {
      alert('Woops, there was an error making the request for the Current Weather.');
    };  
    // Actually send request to server
    xhrCurr.send();
  }

  function replaceCurrentWeather() {
      
    let temper = Math.round(currentWeather.main.temp); //current temperature
    let icon = currentWeather.weather[0].icon;
    let bannerIcon = document.getElementById("current_img_id");
    let time = new Date((currentWeather.dt)*1000);
    var hours = time.getHours();
    var minutes = "0" + time.getMinutes();
    var seconds = "0" + time.getSeconds();
    let timer = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    // if(time.getHours() === 0){
    //     hours = "12:00am"
    // }
    // else if(time.getHours() < 12){
    //     hours = time.getHours().toString() + ":00am";
    // }
    // else if(time.getHours() === 12){
    //     hours = "12:00pm"
    // }
    // else {
    //   hours = (time.getHours()%12).toString() + ":00am";
    // }

    document.getElementById("current_time_id").innerHTML = "Measured at <p>" + timer + " PST</p>";
    document.getElementById("curr_temp_text_id").innerHTML = temper + "<span><sup>º</sup><i>F</i><span>";
    switch(icon) {
      case "01d":
          bannerIcon.src = 'assets/clearsky.svg';
          break;
      case "01n":
          bannerIcon.src = 'assets/clear-night.svg';
          break;
      case "02d":
          bannerIcon.src = 'assets/fewclouds-day.svg';
          break;
      case "02n":
          bannerIcon.src = 'assets/fewclouds-night.svg';
          break;
      case "03d":
      case "03n":
          bannerIcon.src = 'assets/scatteredclouds.svg';
          break;
      case "04d":
      case "04n":
          bannerIcon.src = 'assets/brokencloud.svg';
          break;
      case "09d":
      case "09n":
          bannerIcon.src = 'assets/showerrain.svg';
          break;
      case "10d":
          bannerIcon.src = 'assets/rain-day.svg';
          break;
      case "10n":
          bannerIcon.src = 'assets/rain-night.svg';
          break;
      case "11d":
      case "11n":
      case "10d":
          bannerIcon.src = 'assets/thunderstorms.svg';
          break;
      case "13d":
      case "13n":
          bannerIcon.src = 'assets/snow.svg';
          break;
      case "50d":
      case "50n":
          bannerIcon.src = 'assets/mist.svg';
          break;
      default:
          console.log("Error: Icon not found");
    }
}