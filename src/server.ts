import express from 'express';
import { serverConfig } from './config';
import { pingController } from './controllers/ping.controller';
import pingRouter from './router';

const app = express();

//Registering all the routers and their corresponding routes with our app server
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl + C to stop the server`);
})