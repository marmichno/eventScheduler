//schedule management dates
export const monthChangeDate = (direction:string) => {
    return{
        type: 'MONTHCHANGEDATE',
        payload: direction
    }
}

export const weekChangeDate = (direction:string) => {
    return{
        type: 'WEEKCHANGEDATE',
        payload: direction
    }
}

export const dayChangeDate = (direction:string) => {
    return{
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

export const setDate = (date:Date) => {
    return{
        type: 'SETDATE',
        payload: date
    }
} 

export const scheduleType = (type:string) => {
    return{
        type: 'SELECTSCHEDULETYPE',
        payload:type
    }
}

//events management
export const eventType = (type:string) => {
    return{
        type: "SELECTEVENTTYPE",
        payload:type
    }
}