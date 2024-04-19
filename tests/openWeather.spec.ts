import { test, expect } from "@playwright/test";
import {
  getForecastByCity,
  getWeatherByCity,
  getWeatherByCityId,
} from "../helpers/apiCalls/openWeather";

test.describe("Weather API Tests", () => {
  test("should return current weather data for a city by name", async ({}) => {
    const resp = await getWeatherByCity("Tokyo,japan");
    const respBody = await resp?.json();

    // The response status code is 200
    expect(resp?.status()).toEqual(200);

    // The response body contains temp, humdity and weather conditions
    expect(respBody).toHaveProperty("main.temp"); // Temperature
    expect(respBody).toHaveProperty("main.humidity"); // Humidity
    expect(respBody).toHaveProperty("weather");
    expect(respBody.weather.length).toBeGreaterThan(0);
  });

  test("should return current weather data for a city by ID", async ({}) => {
    const respByCity = await getWeatherByCity("Cairo");
    const respByCityBody = await respByCity?.json();
    const cityId = respByCityBody.id;
    const respById = await getWeatherByCityId(cityId);

    // The response status code is 200
    expect(respById?.status()).toEqual(200);

    const respByIdBody = await respById?.json();

    // The response body contains temp, humdity and weather conditions
    expect(respByIdBody).toHaveProperty("main.temp"); // Temperature
    expect(respByIdBody).toHaveProperty("main.humidity"); // Humidity
    expect(respByIdBody).toHaveProperty("weather");
    expect(respByIdBody.weather.length).toBeGreaterThan(0);

    // Compare data between both responses
    expect(respByCityBody.coord).toEqual(respByIdBody.coord);
    expect(respByCityBody.weather).toEqual(respByIdBody.weather);
    expect(respByCityBody.main).toEqual(respByIdBody.main);
  });

  test("should return 5 day forecast for a city ID", async ({}) => {
    const resp = await getForecastByCity("Toronto,canada");
    // The response status code is 200
    expect(resp?.status()).toEqual(200);

    const respBody = await resp?.json();

    const forecast_data = respBody.list;
    //Esnure we have 40 entries in forecast

    expect(forecast_data.length).toEqual(40); // 40 entries for 5 days with 8 entries per day

    forecast_data.forEach((entry) => {
      // Asserting that 'main' and 'temp' keys exist
      expect(entry).toHaveProperty("main");
      expect(entry.main).toHaveProperty("temp");

      // Asserting that 'weather' key exists and it's not an empty array
      expect(entry).toHaveProperty("weather");
      expect(entry.weather.length).toBeGreaterThan(0);

      // Asserting that 'wind' and 'speed' keys exist
      expect(entry).toHaveProperty("wind");
      expect(entry.wind).toHaveProperty("speed");
    });
  });
});
