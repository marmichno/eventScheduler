//dates
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
        type: 'DAYHCHANGEDATE',
        payload: direction
    }
}

export const scheduleType = (type:string) => {
    return{
        type: 'SELECTSCHEDULETYPE',
        payload:type
    }
}