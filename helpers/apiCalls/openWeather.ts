import { request } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const appId = process.env.openWeather_API_key;

export async function getWeatherByCity(city: string) {
  const req = await request.newContext();
  const url: string = `https://api.openweathermap.org/data/2.5/weather`;

  try {
    const response = await req.get(`${url}?q=${city}&appid=${appId}`);
    return response;
  } catch (error: unknown) {
    // Handle any errors
    if (error instanceof Error) {
      console.error(
        `Error fetching weather data for ${city}: ${error.message}`
      );
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  }
}

export async function getWeatherByCityId(cityId: string) {
  const req = await request.newContext();
  const url: string = `https://api.openweathermap.org/data/2.5/weather`;

  try {
    const response = await req.get(`${url}?id=${cityId}&appid=${appId}`);
    return response;
  } catch (error: unknown) {
    // Handle any errors
    if (error instanceof Error) {
      console.error(
        `Error fetching weather data for ${cityId}: ${error.message}`
      );
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  }
}

export async function getForecastByCity(city: string) {
  const req = await request.newContext();
  const url: string = `https://api.openweathermap.org/data/2.5/forecast`;

  try {
    const response = await req.get(`${url}?q=${city}&appid=${appId}`);
    return response;
  } catch (error: unknown) {
    // Handle any errors
    if (error instanceof Error) {
      console.error(
        `Error fetching weather data for ${city}: ${error.message}`
      );
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  }
}
