/**
 * Configuration initialization for loading environment variables.
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing third party modules
import dotenv from "dotenv"; // Importing dotenv to load environment variables from a .env file

/**
 * Initializes configuration by loading environment variables.
 * This function should be called at the beginning of the application.
 */
export const initConfigurations = () => {
    dotenv.config(); // Loads environment variables from the .env file into process.env
};
