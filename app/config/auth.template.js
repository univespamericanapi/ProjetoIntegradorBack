//Rename this file to auth.config.js
export const config = {
    // secret: 'colocar-uma-key-boa-aqui-exemplo-abaixo',
    secret:
        'RJwciX9bVerlk8d-aO2XKgLlTGlnQrGP2He1d-iIdKHhSFT_qEkN1LMMvvalOqRTbMKgKivSEn-F0uugMH50abbYudeTEOUing7aQqBGQq_BElrsiOsR6QmDXl_0iitJo6sZNd1PsFOD49CjEFuurMA2zciq6Z4VBTfbpA2FXPqGyaPW1tJ1Nb6A0PUhRltLXnqPF_psjFYqxEDUARD5ivaBHdFLXT5agAf_eGA5qH0uxUktFaGpx8C8P9fQCkNV',
    // jwtExpiration: 3600, // 3600 = 1 hour
    // jwtRefreshExpiration: 3600 * 8 // 3600 = 1 hour

    // For tests
    jwtExpiration: 60, // 1 minute
    jwtRefreshExpiration: 120 // 2 minutes
}