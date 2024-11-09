/**
 * JWT interface for env
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

export interface JWTEnvInterface {
    /**
     * Secret key used for signing the JWT. 
     * This should be kept confidential.
     */
    JWT_SECRET_KEY: string;

    /**
     * Expiration time for the JWT, typically set in seconds or a string format 
     * like '1h' for one hour.
     */
    JWT_EXPIRE: string;

    /**
     * Expiration time for the cookie storing the JWT,
     * usually defined in milliseconds.
     */
    JWT_COOKIE_EXPIRE: string;
};
