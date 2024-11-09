/**
 * Comment Interface
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing third party modules
import mongoose, {Document} from "mongoose"; // Importing Document type from mongoose for type safety

// Comment Interface extending Mongoose Schema
export interface CommentInterface extends Document {
    /**
     * Reference to the account associated with the comment.
     * This should be an ObjectId from the Account collection.
     */
    account_id: mongoose.Schema.Types.ObjectId;

    /**
     * Reference to the video associated with the comment.
     * This should be an ObjectId from the Video collection.
     */
    video_id: mongoose.Schema.Types.ObjectId;

    /**
     * The content of the comment.
     */
    description: string;

    /**
     * Indicates whether the comment has been edited.
     */
    edited: boolean;
};
