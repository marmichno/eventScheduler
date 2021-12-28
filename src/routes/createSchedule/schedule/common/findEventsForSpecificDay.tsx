interface Event {
    "data": {
        "id": number,
        "name": string,
        "description": string,
        "dateFrom": string,
        "dataTo": string,
        "maxNumberOfParticipants": number,
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


export const findEventsForSpecificDay = (day:number, month:number, year:number, allUserEvents:Event) => {


    let comparableMonth = month + 1 <= 10 && month + 1 >= 1 ? `0${month + 1}` : `${month + 1}`;
    let comparableDay = day < 10 && day >= 1 ? `0${day}`: `${day}`;
    let comparablePassedDate = `${year}-${comparableMonth}-${comparableDay}`;

    let filteredEvents = allUserEvents.data.filter(val => {
        if(val.eventStatus === "DELETED"){
            return false;
        }
        let dateFrom = val.dateFrom.split("T")[0];
        let dateTo = val.dataTo.split("T")[0];
        if(dateFrom === dateTo){
            return dateFrom === comparablePassedDate;
        }else{
            return comparablePassedDate <= dateTo && comparablePassedDate >= dateFrom;
        }
    });

    return filteredEvents;
}