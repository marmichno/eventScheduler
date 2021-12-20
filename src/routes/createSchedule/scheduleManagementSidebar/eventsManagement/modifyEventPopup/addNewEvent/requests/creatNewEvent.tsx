import axios from 'axios';
import { toast } from 'react-toastify';

interface EventDataTypes {
    "name": string,
    "description": string,
    "timeFrom": string,
    "dateFrom": string,
    "timeTo": string,
    "dateTo": string,
    "eventAvailabilityType": string,
    "maxNumberOfParticipants": number,
    "eventAddress": {
        "houseNumber": string,
        "street": string,
        "city": string,
        "state": string,
        "coordinates": string
    }
}

export const createNewEvent = async (eventData: EventDataTypes) => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const requestObject = {
        "name": eventData.name,
        "description": eventData.description,
        "dateFrom": `${eventData.dateFrom}T${eventData.timeFrom}:00`,
        "dateTo": `${eventData.dateTo}T${eventData.timeTo}:00`,
        "eventAvailabilityType": eventData.eventAvailabilityType,
        "maxNumberOfParticipants": eventData.maxNumberOfParticipants,
        "eventAddress": {
            "houseNumber": eventData.eventAddress.houseNumber,
            "street": eventData.eventAddress.street,
            "city": eventData.eventAddress.city,
            "state": eventData.eventAddress.state,
            "coordinates": "XYZ"
        }
    }

    const body = JSON.stringify(requestObject);

    try {
        const request = await axios.post(`http://localhost:8080/api/event/`, body, config);
        const response = await request;
        toast.success("Event has been created")
        return response;
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 400) {
                toast.error("Bad Request");
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