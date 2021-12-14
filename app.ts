import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./build/routes";
import cors from 'cors';
import config from 'config';
import { errorHandler } from "./src/utils/errorHandling/errorHandling";

const app = () => {

    const app = express();

    // Use body parser to read sent json payloads
    app.use(
    bodyParser.urlencoded({
        extended: true,
    })
    );
    
    app.use(bodyParser.json());
    
    app.use(cors());

    

    RegisterRoutes(app);

    app.use(errorHandler);

    const port = config.get('app.port') || 3000;

    app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port} 🥳`)
    );
};

app();