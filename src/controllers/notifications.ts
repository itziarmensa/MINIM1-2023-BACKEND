import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertNotification, getNotification, getNotifications, updateNotification, deleteNotification, getNotificationsOfUser } from "../services/notifications";

const getNot = async({params}:Request,res:Response)=>{
    try{
        const {idNot}=params;
        const response=await getNotification(idNot);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_NOTIFICATION");
    }
};

const getNots=async(req:Request,res:Response)=>{
    try{
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10;
        const response=await getNotifications(page, limit);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_NOTIFICATIONS");
    }
};

const postNot=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertNotification(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_NOTIFICATION");
    }
};

const updateNot=async ({params,body}:Request,res:Response)=>{
    try{
        const {idNot}=params;
        const response=await updateNotification(idNot,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_NOTIFICATION");
    }
};

const deleteNot=async ({params}:Request,res:Response)=>{
    try{
        const {idNot}=params;
        const response=await deleteNotification(idNot);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_NOTIFICATION");
    }
};

const getNotsOfUser=async({params}:Request,res:Response)=>{
    try{
        const {idRec}=params;
        const response=await getNotificationsOfUser(idRec);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_NOTIFICATIONS");
    }
};

export {getNot, getNots, postNot, updateNot, deleteNot, getNotsOfUser};