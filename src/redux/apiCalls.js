import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest} from "../requestMethod.js"

export const login = async (disatch , user)=>{
    disatch(loginStart());

    try{

        const res = await publicRequest.post("/auth/login", user)
        disatch(loginSuccess(res.data));

    }catch(err){
        disatch(loginFailure())
    }
}