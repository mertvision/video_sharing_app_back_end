/**
 * The main file of the application
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing modules for application initialization
import {initConfigurations} from "./init/config/init_config";
import {initMiddlewares} from "./init/middlewares/init_middlewares";
import {initMongodbConnection} from "./db/connections/mongodb_connection";
import {init} from "./init/server/init";

// Importing third-party modules
import express from "express";

// Declaring the server instance using Express
const server = express();

// Calling initialization functions
initConfigurations();               // Initialize configuration settings
initMiddlewares(server);            // Set up middleware for the server
initMongodbConnection();            // Establish connection to MongoDB
init(server);                       // Initialize the server

// Extend the Express namespace to include account information in the request
declare global {
    namespace Express {
        interface Request {
            account?: {
                id?: string;          // Optional account ID
                first_name?: string; // Optional account first name
            };
            savedImage: string;
            savedVideo: string;
            savedProfileImage: string;
        }
    }
};

