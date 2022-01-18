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

const initialState = {
    "data": [
        {
            "id": 0,
            "name": "string",
            "description": "string",
            "dateFrom": "",
            "dataTo": "",
            "maxNumberOfParticipants": 0,
            "participantList": [
                {
                    "id": 0,
                    "name": "string",
                    "description": "string",
                    "email": "string",
                    "inviteToFriend": "ALREADY_INVITED",
                    "friendsList": [
                        {
                            "id": 0,
                            "name": "string"
                        }
                    ]
                }
            ],
            "address": {
                "houseNumber": "string",
                "street": "string",
                "city": "string",
                "state": "string",
                "coordinates": "string"
            },
            "type": "DEFAULT",
            "availabilityType": "PUBLIC",
            "status": "ACTIVE",
            "reasonForRemoval": "string",
            "organizer": {
                "id": 0,
                "name": "string"
            }
        }
    ],
    "status": 0,
    "fetchStatus": "BEFORE_FETCH"
}

const allUserEventsReducer = (state = initialState, action: { payload: Event; type: string; }) => {

    let events: Event = action.payload;

    switch (action.type) {
        case 'FETCHALLUSEREVENTS':

            if (events.fetchStatus === "FETCH_ERROR") {
                if (events.status === 404) {
                    events = { ...initialState, fetchStatus: "BEFORE_FETCH" }
                } else if (events.status !== 404 && events.status !== 200) {
                    events = { ...initialState, fetchStatus: "FETCH_ERROR" }
                }
            } else {
                events = { ...events, fetchStatus: "FETCH_SUCCESS" }
            }

            return events;


        default:
            return state;
    }
}

export default allUserEventsReducer;