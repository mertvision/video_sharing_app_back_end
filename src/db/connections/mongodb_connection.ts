/**
 * Initializes the MongoDB connection using Mongoose.
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing mongoose and ConnectOptions for type safety
import mongoose, { ConnectOptions } from "mongoose"; // Importing mongoose for database interactions

/**
 * Establishes a connection to the MongoDB database.
 * This function should be called to connect to the database at the start of the application.
 */
export const initMongodbConnection = async () => {
    try {
        // Connect to MongoDB using the URI from environment variables
        await mongoose.connect(process?.env?.MONGO_URI || '', {
            dbName: "video_sharing" // Specify the database name
        } as ConnectOptions);
        
        console.log("MongoDB connection is successful."); // Log success message
    } catch (err) {
        console.log("Mongodb connection error:", err); // Log any errors encountered during connection
    }
};
