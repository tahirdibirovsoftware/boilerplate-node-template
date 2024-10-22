declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'production' | 'development';
            MONGODB_URI: string;
            PORT: string;
        }
    }
}

export { }