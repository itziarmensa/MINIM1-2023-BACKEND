import { ObjectId } from "mongoose";

export interface Notification {
    description: string;
    issuer: ObjectId;
    receptor: ObjectId;
    state: boolean;
}