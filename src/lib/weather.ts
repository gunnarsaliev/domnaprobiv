export interface WeatherData {
  temperature: number
  description: string
  icon: string
  city: string
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number
    weather_code: number
  }
  current_units: {
    temperature_2m: string
  }
}

const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes
const RUSE_COORDS = { latitude: 43.8356, longitude: 25.9758 }

let cachedWeather: WeatherData | null = null
let lastFetchTime = 0

// Weather code mapping from Open-Meteo to descriptions
function getWeatherDescription(code: number): string {
  const weatherCodes: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Dense drizzle',
    56: 'Freezing drizzle',
    57: 'Freezing drizzle',
    61: 'Light rain',
    63: 'Rain',
    65: 'Heavy rain',
    66: 'Freezing rain',
    67: 'Freezing rain',
    71: 'Light snow',
    73: 'Snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Light showers',
    81: 'Showers',
    82: 'Heavy showers',
    85: 'Light snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm',
    99: 'Thunderstorm',
  }
  return weatherCodes[code] || 'Unknown'
}

export async function getWeatherData(): Promise<WeatherData | null> {
  // Check cache
  const now = Date.now()
  if (cachedWeather && now - lastFetchTime < CACHE_DURATION) {
    return cachedWeather
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${RUSE_COORDS.latitude}&longitude=${RUSE_COORDS.longitude}&current=temperature_2m,weather_code&timezone=auto`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data: OpenMeteoResponse = await response.json()

    const weatherData: WeatherData = {
      temperature: Math.round(data.current.temperature_2m),
      description: getWeatherDescription(data.current.weather_code),
      icon: '', // Open-Meteo doesn't provide icons in free tier
      city: 'Ruse',
    }

    // Update cache
    cachedWeather = weatherData
    lastFetchTime = now

    return weatherData
  } catch (error) {
    console.error('Failed to fetch weather data:', error)
    return cachedWeather // Return cached data if available
  }
}
