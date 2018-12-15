import * as React from "react";
import ReactDOM from "react-dom";

// TASK:
// Create a simple React application which displays the current wind and humidity
// for Copenhagen provided by the OpenWeatherMap API.
// To see your progress as you go, you may want to uncomment the render call in STEP 3 first!

// STEP 1:
// Create a component to recieve data from the OpenWeatherMap "current weather" API.
// OpenWeatherMap current DOCUMENTATION: https://openweathermap.org/current
// It should:
// 1. Recieve data from the OpenWeatherMap apiUrl (defined below as `apiUrl`)
// 2. Store the recieved data in state with a time stamp the time the data was recieved
// 3. Pass the data and timestamp to it's children using the "children as a function" method.
// 4. Recieve new data from the OpenWeatherMap API every 3 seconds and update state appropriately

let apiKey = "5a41d1b27a5b53105892161b092b2ae1";
let apiUrl =
  "//api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=" +
  apiKey;

// ## Component 1 goes here ##

// STEP 2:
// Create a component which utilises your above component to display:
// 1. The current wind speed and direction
// 2. The current humidity percentage
// 3. The time when the data was last updated

// ## Component 2 goes here ##

// STEP 3:
// Render the application here. I'll make this part easy :)

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
