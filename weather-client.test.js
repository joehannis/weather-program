const WeatherClient = require("./weather-client");

describe("WeatherClient", () => {
  it("fetch data for london", (done) => {
    const weatherClient = new WeatherClient();
    weatherClient.fetchWeatherData("London").then((data) => {
      expect(data.name).toEqual("London");
      done();
    });
  });
});
