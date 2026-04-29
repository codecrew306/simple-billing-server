import dotenv from 'dotenv';
dotenv.config();

export const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    dbUri: process.env.MONGODB_URI,
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production'
};