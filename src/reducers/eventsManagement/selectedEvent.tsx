interface Event {
    "id": number,
    "name": string,
    "description": string,
    "dateFrom": string,
    "dataTo": string,
    "maxNumberOfParticipants": number,
    "eventAvailabilityType": string,
    "participantList": [{
    }],
    "address": {
        "houseNumber": string,
        "street": string,
        "city": string,
        "state": string,
        "coordinates": string
    },
    "eventType": string,
    "eventStatus": string,
    "reasonForRemoval": string,
    "organizer": {
        "id": number,
        "name": string
    }
}

const initialState = {
    "id": 0,
    "name": "",
    "description": "",
    "dateFrom": "",
    "dataTo": "",
    "maxNumberOfParticipants": 0,
    "participantList": [
        {}
    ]
    ,
    "address": {
        "houseNumber": "",
        "street": "",
        "city": "",
        "state": "",
        "coordinates": ""
    },
    "eventType": "",
    "eventStatus": "",
    "eventAvailabilityType": "",
    "reasonForRemoval": "",
    "organizer": {
        "id": 0,
        "name": ""
    }
}

const selectedUserEventReducer = (state = initialState, action: { payload: Event; type: string; }) => {

    let event: Event = action.payload;

    console.log(event);

    switch (action.type) {
        case 'SELECTUSEREVENT':

            return event;

        default:
            return state;
    }
}

export default selectedUserEventReducer;