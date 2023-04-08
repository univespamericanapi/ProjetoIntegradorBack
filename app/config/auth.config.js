// Base auth configs
export const authConfig = {
    jwtExpira: 3600 * 1, // 3600 = 1 hour
    jwtRefreshExpira: 3600 * 8, // 3600 * 8 = 8 hour

    // For tests
    // jwtExpira: 60, // 1 minute
    // jwtRefreshExpira: 120, // 2 minutes

    corsOrigin: 'http://localhost:8081'
}