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

class App extends React.Component {
    state = {
        windSpeed: undefined,
        windDeg: undefined,
        humidity: undefined,
        timestamp: undefined
    };

    getWeather = async () => {
        const apiData = await fetch(apiUrl);
        const data = await apiData.json();
        this.setState({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            timestamp: data.dt
        })
    };


    componentDidMount() {
        this.getWeather();
        setInterval(() => this.getWeather(), 3000);
    }

    render() {
        return (
            <div>
                <Weather
                    humidity={this.state.humidity}
                    windSpeed={this.state.windSpeed}
                    windDeg={this.state.windDeg}
                    timestamp={this.state.timestamp}
                />
            </div>
        );
    }

}


// STEP 2:
// Create a component which utilises your above component to display:
// 1. The current wind speed and direction
// 2. The current humidity percentage
// 3. The time when the data was last updated

// ## Component 2 goes here ##

class Weather extends React.Component {

    convertToDate = function(timestamp){
        let date = new Date(timestamp * 1000);
        return date.toGMTString();
    };

    render() {
        return (
            <div>
                {this.props.windSpeed && <p>Current wind speed: {this.props.windSpeed} meter/sec</p>}
                {this.props.windDeg && <p>Wind direction (in degrees): {this.props.windDeg} </p>}
                {this.props.humidity && <p>Current humidity: {this.props.humidity} %</p>}
                {this.props.timestamp && <p>Last updated: {this.convertToDate(this.props.timestamp)}</p>}
            </div>
        );
    }
}


// STEP 3:
// Render the application here. I'll make this part easy :)
// Thank you ;)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
