import axios from 'axios';
import { toast } from 'react-toastify';

export const inviteUserToFriends = async (userId: number, inviteId: number,) => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ userId: userId });

    try {
        const request = await axios.post(`http://localhost:8080/api/user/invite/${inviteId}`, body, config);
        const response = await request;
        return response;
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 400) {
                toast.error("Cant invite yourself to friends");
                console.log(error.message);
            } else if (error.response.status === 404) {
                toast.error("User does not exist");
                console.log(error.message);
            } else if (error.response.status === 409) {
                toast.error("Invitation already pending / user already in friends");
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