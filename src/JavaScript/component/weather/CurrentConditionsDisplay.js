class CurrentConditionsDisplay {
  #temperature;
  #humidity;
  #weatherData;

  /**
   * @param {int} temperature
   */
  set setTemperature(temperature) {
    this.#temperature = temperature;
  }

  /**
   * @param {int} humidity
   */
  set setHumidity(humidity) {
    this.#humidity = humidity;
  }

  /**
   * @param {int} weatherData
   */
  set setWeatherData(weatherData) {
    this.#weatherData = weatherData;
  }

  currentConditionsDisplay(weatherData) {
    this.#weatherData = weatherData;
    this.#weatherData.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.setTemperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    display();
  }

  display() {
    console.log(
      `현재 상태: 온도 ${this.#temperature}F, 습도${this.#humidity}%`
    );
  }
}

export default CurrentConditionsDisplay;
