import CurrentConditionsDisplay from './currentConditionsDisplay.js';
import WeatherData from './weatherData.js';

class WeatherStation {
  static main(args) {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionsDisplay(weatherData);
    // const statisticsDisplay = new StatisticsDisplay(weatherData);
    // const forecastDisplay = new ForcastDisplay(weatherData);

    weatherData.setMeasurements(80, 65, '30.4f');
    weatherData.setMeasurements(82, 70, '29.2f');
    weatherData.setMeasurements(78, 90, '29.2f');
  }
}

WeatherStation.main();
