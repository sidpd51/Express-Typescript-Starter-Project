import express from 'express';
import { serverConfig } from './config';
import v1Router from './router/v1/index.router';
import v2Router from './router/v2/index.router';

const app = express();

//Registering all the routers and their corresponding routes with our app server
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl + C to stop the server`);
})