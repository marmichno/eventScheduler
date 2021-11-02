import axios from 'axios';

interface Userdata {
    name: string,
    description: string,
    username: string,
    password: string,
    email:string
}

export const createUser = async (userData:Userdata) => {

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify(userData);

    try{
        const request = await axios.post("http://localhost:8080/api/user/register",body,config);
        const response = await request;
        return response;
    }catch(error){
        return error;
    }
}