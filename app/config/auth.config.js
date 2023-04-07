// Base auth configs
export const configAuth = {
    jwtExpiration: 3600 * 1, // 3600 = 1 hour
    jwtRefreshExpiration: 3600 * 8, // 3600 * 8 = 8 hour

    // For tests
    // jwtExpiration: 60, // 1 minute
    // jwtRefreshExpiration: 120, // 2 minutes

    corsOrigin: 'http://localhost:8081'
}