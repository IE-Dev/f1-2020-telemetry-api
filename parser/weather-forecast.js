/*
    struct WeatherForecastSample
    {
        uint8     m_sessionType;                     // 0 = unknown, 1 = P1, 2 = P2, 3 = P3, 4 = Short P, 5 = Q1
                                                     // 6 = Q2, 7 = Q3, 8 = Short Q, 9 = OSQ, 10 = R, 11 = R2
                                                     // 12 = Time Trial
        uint8     m_timeOffset;                      // Time in minutes the forecast is for
        uint8     m_weather;                         // Weather - 0 = clear, 1 = light cloud, 2 = overcast
                                                     // 3 = light rain, 4 = heavy rain, 5 = storm
        int8      m_trackTemperature;                // Track temp. in degrees celsius
        int8      m_airTemperature;                  // Air temp. in degrees celsius
    };
*/

const Parser = require('binary-parser').Parser;

const weatherForecast = new Parser()
    .uint8('m_sessionType')
    .uint8('m_timeOffset')
    .uint8('m_weather')
    .int8('m_trackTemperature')
    .int8('m_airTemperature');

module.exports = weatherForecast;