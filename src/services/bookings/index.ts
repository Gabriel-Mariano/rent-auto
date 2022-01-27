import { failedResponseObject, successResponseObject } from '@src/utils/buildResponseObject';
import api from '../api.default';

export const listBookings = async (autoId: string) => {
    try {
        const data = await api.get(`/bookings/calendar/${autoId}`);

        return successResponseObject(data);
    } catch (err) {
        return failedResponseObject(err);
    }
}