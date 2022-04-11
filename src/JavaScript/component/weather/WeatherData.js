class WeatherData {
  constructor() {
    this.temp = '';
    this.humidity = '';
    this.pressure = '';

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
  // 80, 65, '30.4f'
  setMeasurements(temp, humidity, pressure) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  measurementsChanged() {
    const temp = this.getTemperature();
    const humidity = this.getHumidity();
    const pressure = this.getPressure();

    /**
     * 문제점
     * 1. 이 부분은 바뀔 수 있는 부분으로 캡슐화해야 함
     * 2. 구체적인 구현에 맞춰서 코딩했으므로 프로그램을 고치지 않고는 다른 디스플레이 항목을 추가하거나 제거할 수 없습니다.
     * 3. 공통 항목들에 대한 데이터를 받고 있다.
     */

    this.currentConditionsDisplay.update(temp, humidity, pressure);
    this.statisticsDisplay.update(temp, humidity, pressure);
    this.forecastDisplay.update(temp, humidity, pressure);
  }

  getTemperature() {}

  getHumidity() {}

  getPressure() {}
}

export default WeatherData;
