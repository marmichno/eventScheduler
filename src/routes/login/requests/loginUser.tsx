import axios from 'axios';
import {toast} from 'react-toastify';

interface UserData {
    login: string,
    password: string
}

export const loginUser = async ({login, password}:UserData) =>{

    const config = {
        headers: {
            'Authorization': 'Basic ' + btoa(login + ":" + password)
        }
    }

    try{
        const request = await axios.get('http://localhost:8080/api/user', config);
        const response = await request;
        let headers = btoa(login + ":" + password);
        localStorage.setItem('user', headers);
        axios.defaults.headers.common['Authorization'] = `Basic ` + headers;
        toast.success(`Welcome ${login}`);
        return response.status;
    }catch(error:any){
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if(error.response.status === 401){
                toast.error("Wrong login or password");
                console.log(error.message);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
                toast.error("Something went wrong");
                console.log(error.message);
          } else {
            // Something happened in setting up the request that triggered an Error
                toast.error("Something went wrong");
                console.log('Error', error.message);
          }
        return error.response.status;
    }
}