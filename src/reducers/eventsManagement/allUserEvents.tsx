interface Event {
    "data": [{
        "id": number,
        "name": string,
        "description": string,
        "dateFrom": string,
        "dateTo": string,
        "maxNumberOfParticipants": number,
        "participantList": [
            {}
        ],
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
    }],
    "status": number
}

const initialState = {
    "data": [{
        "id": 1,
        "name": "Name",
        "description": "Description",
        "dateFrom": "2021-10-15T21:39:23",
        "dateTo": "2021-10-15T21:39:23",
        "maxNumberOfParticipants": 10,
        "participantList": [
            {}
        ],
        "address": {
            "houseNumber": "House number",
            "street": "Street",
            "city": "City",
            "state": "State",
            "coordinates": "XYZ"
        },
        "eventType": "DEFAULT",
        "eventStatus": "ACTIVE",
        "reasonForRemoval": "reason",
        "organizer": {
            "id": 1,
            "name": "UserName"
        }
    }],
    "status": 0
}

const allUserEventsReducer = (state = initialState, action: { payload: Event; type: string; }) => {

    const events: Event = action.payload;

    console.log(events);

    switch (action.type) {
        case 'FETCHALLUSEREVENTS':

            return events;


        default:
            return state;
    }
}

export default allUserEventsReducer;