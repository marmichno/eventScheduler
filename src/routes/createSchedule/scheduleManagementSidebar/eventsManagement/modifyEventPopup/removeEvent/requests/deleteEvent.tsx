import axios from 'axios';
import { toast } from 'react-toastify';

export const deleteEvent = async (eventId: number) => {

    try {
        const request = await axios.delete(`http://localhost:8080/api/event/${eventId}`);
        const response = await request;
        toast.success("Event has been deleted")
        return response;
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 400) {
                toast.error("Bad Request / User is not organizer");
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