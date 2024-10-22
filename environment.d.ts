declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'production' | 'development';
            MONGODB_URI: string;
            PORT: string;
            ACCESS_TOKEN_SECRET: string;
            REFRESH_TOKEN_SECRET: string;
            ACCESS_TOKEN_EXPIRES: string;
            REFRESH_TOKEN_EXPIRES: string;
        }
    }
}

export { }