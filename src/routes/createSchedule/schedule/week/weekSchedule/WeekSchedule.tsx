//hooks
import { useEffect, useState } from "react";
import { useAppSelector } from '../../../../../hooks';
//functions
import {createArrayOfDays} from '../../common/createArrayOfDays';

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const WeekSchedule: React.FC = () => {

    const selectedDate = useAppSelector(state => state.monthDateReducer);
    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedDate.month, selectedDate.year));
    },[selectedDate]);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'];

    return(
        <div></div>
    )
}