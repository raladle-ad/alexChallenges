Test 1 : Ensure that the API correctly returns the current weather data when queried with a city name.
Preconditions: Obtain a valid API key from OpenWeatherMap.
Test Steps:
Construct a GET request to the /weather endpoint including a query parameter for a known city name (e.g., q=London) and your API key (appid=your_api_key).
Send the request to the server.
Expected Results:
The response status code is 200, indicating success.
The response body contains weather data for the specified city, including parameters like temperature, humidity, and weather conditions.

Test 2: Confirm that the API can retrieve current weather data using a city's unique ID.
Preconditions: Obtain a valid API key and a city ID from OpenWeatherMap.
Test Steps:
Formulate a GET request to the /weather endpoint with the id query parameter set to a valid city ID (e.g., id=2172797) and your API key.
Execute the request.
Expected Results:
The server responds with a 200 status code.
The response includes weather details for the city corresponding to the provided ID, ensuring the data matches expected values for that location.

Test 3: Test the API's ability to return a 5-day weather forecast for a specified city by name.
Preconditions: Obtain a valid API key from OpenWeatherMap.
Test Steps:
Create a GET request for the /forecast endpoint, including a city name (e.g., q=Paris) and your API key in the query parameters.
Send this request to the API.
Expected Results:
A 200 status code is returned, indicating the request was successful.
The response body contains a weather forecast for the next 5 days, including data points like daily temperatures, weather conditions, and wind speed for the specified city.
