//hooks
import { useAppSelector } from "../../../../hooks";
import { useAppDispatch } from "../../../../hooks";
//actions
import {selectUserEvent} from '../../../../actions/index';

interface Event {
    "data": {
        "id": number,
        "name": string,
        "description": string,
        "dateFrom": string,
        "dataTo": string,
        "maxNumberOfParticipants": number,
        "participantList":
        {
            "id": number,
            "name": string,
            "description": string,
            "email": string,
            "inviteToFriend": string,
            "friendsList":
            {
                "id": number,
                "name": string
            }[]
        }[],
        "address": {
            "houseNumber": string,
            "street": string,
            "city": string,
            "state": string,
            "coordinates": string
        },
        "type": string,
        "availabilityType": string,
        "status": string,
        "reasonForRemoval": string,
        "organizer": {
            "id": number,
            "name": string
        }
    }[],
    "status": number,
    "fetchStatus": string
}

const findSelectedEvent = (allUserEvents:Event, e:any) => {

    const eventId = parseInt(e.target.dataset.id);
    const selectedEvent = allUserEvents.data.filter(val => val.id === eventId);
    return selectedEvent[0];
}

export default findSelectedEvent