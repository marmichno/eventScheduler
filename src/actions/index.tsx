import axios from "axios"

//schedule management dates
export const monthChangeDate = (direction: string) => {
    return {
        type: 'MONTHCHANGEDATE',
        payload: direction
    }
}

export const weekChangeDate = (direction: string) => {
    return {
        type: 'WEEKCHANGEDATE',
        payload: direction
    }
}

export const dayChangeDate = (direction: string) => {
    return {
        type: 'DAYCHANGEDATE',
        payload: direction
    }
}

interface Date {
    day: number,
    month: number,
    week: number,
    year: number
}

export const setDate = (date: Date) => {
    return {
        type: 'SETDATE',
        payload: date
    }
}

export const scheduleType = (type: string) => {
    return {
        type: 'SELECTSCHEDULETYPE',
        payload: type
    }
}

//events management
export const fetchAllUserEvents = () => async (dispatch: any) => {
    let userInfo = JSON.parse(localStorage["userInfo"]);
    const response = await axios.get(`http://localhost:8080/api/event/?userId=${userInfo.id}`);
    console.log(response);
    dispatch({
        type: "FETCHALLUSEREVENTS", payload: {
            data: response.data, 
            status: response.status,
            fetchStatus: "BEFORE_FETCH"
        }
    });
}

export const selectUserEvent = (type: any) => {
    return {
        type: "SELECTUSEREVENT",
        payload: type
    }
}

export const eventType = (type: string) => {
    return {
        type: "SELECTEVENTTYPE",
        payload: type
    }
}

export const popupEventType = (type: string) => {
    return {
        type: "SELECTPOPUPTYPE",
        payload: type
    }
}

export const showEventPopup = (type: boolean) => {
    return {
        type: "SHOWEVENTPOPUP",
        payload: type
    }
}

export const chooseEventId = (id: number) => {
    return {
        type: "CHOOSEEVENTID",
        payload: id
    }
}

//navbar

export const showNavbar = (showNavbar: boolean) => {
    return {
        type: "SHOWNAVBAR",
        payload: showNavbar
    }
}

//events main page

export const selectedEventEventFinder = (selectedEventIdEventFinder: number | null) => {
    return {
        type: "SELECTEVENTEVENTFINDER",
        payload: selectedEventIdEventFinder
    }
}

export const eventsTypeEventFinder = (eventsTypeEventFinder: string) => {
    return {
        type: "EVENTSTYPEEVENTFINDER",
        payload: eventsTypeEventFinder
    }
}

export const filterEventsByNameMain = (name:string) => {
    return{
        type: "FILTEREVENTSBYNAMEMAIN",
        payload: name
    }
}

export const filterEventsByLocationMain = (location:string) => {
    return{
        type: "FILTEREVENTSBYLOCATIONMAIN",
        payload: location
    }
}

export const filterEventsByDateMain = (date:string) => {
    return{
        type: "FILTEREVENTSBYDATEMAIN",
        payload: date
    }
}

//if user logged in

export const isLogged = (isLogged: boolean) => {
    return {
        type: "ISLOGGED",
        payload: isLogged
    }
}