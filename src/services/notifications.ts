import { Notification } from "../interfaces/notification.interface";
import NotificationModel from "../models/notification";

const insertNotification = async(item: Notification) => {
    const responseInsert = await NotificationModel.create(item);
    return responseInsert;
};

const getNotifications = async(page: number, limit: number) => {
    const options = {
        page: page,
        limit: limit
      };
    const responseItem = await NotificationModel.paginate({}, options);
    return responseItem;
};

const getNotification = async(id: string) => {
    const responseItem = await NotificationModel.findOne({_id: id});
    return responseItem;
};

const updateNotification = async(id: string, data: Notification) => {
    const responseItem = await NotificationModel.findOneAndUpdate({_id: id},data,{new: true});
    return responseItem;
};

const deleteNotification = async(id: string) => {
    const responseItem = await NotificationModel.findOneAndRemove({_id: id});
    return responseItem;
};

const getNotificationsOfUser = async (id: string) => {
    const responseItem = await NotificationModel.findOne({receptor: id});
    return responseItem;
}

export {insertNotification, getNotifications, getNotification, updateNotification, deleteNotification, getNotificationsOfUser};