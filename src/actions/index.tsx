//dates
export const weekChangeDate = (direction:string) => {
    return{
        type: 'WEEKCHANGEDATE',
        payload: direction
    }
}

export const monthChangeDate = (direction:string) => {
    return{
        type: 'MONTHCHANGEDATE',
        payload: direction
    }
}

export const dayChangeDate = (direction:string) => {
    return{
        type: 'DAYHCHANGEDATE',
        payload: direction
    }
}