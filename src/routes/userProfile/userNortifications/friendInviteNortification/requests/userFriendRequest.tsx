import axios from 'axios';
import {toast} from 'react-toastify';

export const userFriendRequest = async () =>{

    try{
        const request = await axios.get('http://localhost:8080/api/user/invitation?status=WAITING&type=RECEIVED');
        const response = await request;
        console.log(response);
        return response;
    }catch(error:any){
        console.log(error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if(error.response.status === 401){
                toast.error("Unauthorized");
                console.log(error.message);
                return error.response;
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
                toast.error("Something went wrong");
                console.log(error.message);
                return error.response;
          } else {
            // Something happened in setting up the request that triggered an Error
                toast.error("Something went wrong");
                console.log('Error', error.message);
                return error.response;
          }
        return error.response;
    }
}