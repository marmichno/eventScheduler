

export const findEventsForSpecificDay = (day:number, month:number, allUserEvents:any) => {
    
    let comparableMonth = month + 1;

    if(allUserEvents.fetchStatus === "FETCH_SUCCESS"){
        console.log(allUserEvents.data[0].dateFrom);
        console.log(allUserEvents.data[0].dateTo);
        console.log(`dzień:${day}, miesiąc:${month}`);
    }

    return null
}