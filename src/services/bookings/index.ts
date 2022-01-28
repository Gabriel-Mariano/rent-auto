import { failedResponseObject, successResponseObject } from '@src/utils/buildResponseObject';
import api from '../api.default';



interface IUnavailableDaysPros {
    autoId?:number;
    start_date:string;
    end_date:string;
    userId?:number;
}


export const listBookings = async (autoId: string) => {
    try {
        const data = await api.get(`/bookings/calendar/${autoId}`);

        return successResponseObject(data);
    } catch (err) {
        return failedResponseObject(err);
    }
}