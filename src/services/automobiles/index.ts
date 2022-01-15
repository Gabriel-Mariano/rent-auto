import { failedResponseObject, successResponseObject } from '@src/utils/buildResponseObject';
import api from '../api.default';

export const listAutomobiles = async () => {
    try{
        const  data = await api.get('/automobiles');

        return successResponseObject(data);
    } catch(err) {
        return failedResponseObject(err);
    }
}