//The files contain all the configuration logic for app server to work
import dotenv from 'dotenv';

function loadEnv() {
    dotenv.config()
    console.log("Environment variables loaded")
}
loadEnv();


type serverConfigType = {
    PORT: number;
}

export const serverConfig: serverConfigType = {
    PORT: Number(process.env.PORT) || 3000
};