import { UserAuth } from "../../../apiEndPoints/User";
import { ShowConsoleLogs } from "../../../utils"
import AxiosRequest from "../../axios"
export const UserAuthServices = {
    userLogin:async(bodyData)=>{
        try{
            const payload = {
                bodyData,
                ...UserAuth.login
            };
            const response = await AxiosRequest(payload);
            return response;
        }catch(error){
            ShowConsoleLogs(error);
            throw error;
        }
    },
    userSignup:async(bodyData)=>{
        try{
            const payload = {
                bodyData,
                ...UserAuth.signup
            };
            const response = await AxiosRequest(payload);
            return response;
        }catch(error){
            ShowConsoleLogs(error);
            throw error;
        }
    }
}