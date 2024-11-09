/**
 * Custom error class
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Custom error class for handling application-specific errors
export class CustomError extends Error {
  public status: number; // HTTP status code associated with the error

  constructor(message: string, status: number) {
      super(message);      // Pass the error message to the base Error class
      this.name = 'CustomError'; // Set the name of the error
      this.status = status; // Assign the provided status code
  };
};
