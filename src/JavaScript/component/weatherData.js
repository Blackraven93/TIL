class WeatherData {
  constructor() {
    this.currentConditionsDisplay = {
      update(temp, humidity, pressure) {},
    };

    this.statisticsDisplay = {
      update(temp, humidity, pressure) {},
    };

    this.forecastDisplay = {
      update(temp, humidity, pressure) {},
    };
  }

  measurementsChanged() {
    const temp = this.getTemperature();
    const humidity = this.getHumidity();
    const pressure = this.getPressure();

    this.currentConditionsDisplay.update(temp, humidity, pressure);
    this.statisticsDisplay.update(temp, humidity, pressure);
    this.forecastDisplay.update(temp, humidity, pressure);
  }

  getTemperature() {}

  getHumidity() {}

  getPressure() {}
}
