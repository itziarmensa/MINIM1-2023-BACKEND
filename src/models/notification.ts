import { PaginateModel, Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { Notification } from "../interfaces/notification.interface";

interface PaginatedNotificationModel<T> extends PaginateModel<T> {};

const NotificationSchema = new Schema<Notification>(
    {
        description:{
            type: String,
            required: true,
        },

        issuer:{
            type: [Schema.Types.ObjectId],
            ref: 'users',
        },

        receptor:{
            type: [Schema.Types.ObjectId],
            ref: 'users',
        },

        state:{
            type: Boolean,
            required: true,
        }
    }
);

NotificationSchema.plugin(mongoosePaginate);

const NotificationModel: PaginatedNotificationModel<Notification> = model<Notification, PaginatedNotificationModel<Notification>>('notifications', NotificationSchema);

export default NotificationModel;