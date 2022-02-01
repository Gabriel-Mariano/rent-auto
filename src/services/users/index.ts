import { identifier } from "@babel/types";
import { successResponseObject, failedResponseObject } from "@src/utils/buildResponseObject";
import api from "../api.default";

export const registerCpf = async ( identifier:{}) => {
    try {
        const data = await api.put("/profile/identifier", identifier);

        return successResponseObject(data);
    } catch (err) {
        return failedResponseObject(err);
    }
    
}