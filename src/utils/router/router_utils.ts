/**
 * Router utils
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing modules
import express from "express";

// Function to generate and return a new router instance
export const generateRouter = () => {
    const router = express.Router(); // Create a new router instance
    return router;                  // Return the router
};
