import express from 'express';
import { serverConfig } from './config';
import { pingController } from './controllers/ping.controller';

const app = express();

app.get('/ping', pingController)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl + C to stop the server`);
})