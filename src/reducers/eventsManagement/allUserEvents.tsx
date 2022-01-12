interface Event {
    "data": {
        "id": number,
        "name": string,
        "description": string,
        "dateFrom": string,
        "dataTo": string,
        "maxNumberOfParticipants": number,
        "eventAvailabilityType": string,
        "participantList": {
        }[],
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
    }[],
    "status": number,
    "fetchStatus": string
}

const initialState = {
    "data": [{
        "id": 0,
        "name": "",
        "description": "",
        "dateFrom": "",
        "dataTo": "",
        "maxNumberOfParticipants": 0,
        "eventAvailabilityType": "",
        "participantList": [
            {}
        ],
        "address": {
            "houseNumber": "",
            "street": "",
            "city": "",
            "state": "",
            "coordinates": ""
        },
        "eventType": "",
        "eventStatus": "",
        "reasonForRemoval": "",
        "organizer": {
            "id": 0,
            "name": ""
        }
    }],
    "status": 0,
    "fetchStatus": "BEFORE_FETCH"
}

const allUserEventsReducer = (state = initialState, action: { payload: Event; type: string; }) => {

    let events: Event = action.payload;

    switch (action.type) {
        case 'FETCHALLUSEREVENTS':

            if(events.status !== 200){
                events = {...events, fetchStatus: "FETCH_ERROR"}
            } else if(events.status === 200){
                events = {...events, fetchStatus: "FETCH_SUCCESS"}
            }

            return events;


        default:
            return state;
    }
}

export default allUserEventsReducer;