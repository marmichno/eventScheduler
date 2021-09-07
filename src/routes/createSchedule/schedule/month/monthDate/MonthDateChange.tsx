//css
import MonthDateCSS from './monthDate.module.scss';
//hooks
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../../../../reducers/index';

export const MonthDate = () => {

    const newDate = new Date();

    const selectedDate = useSelector((state: RootState) => state.monthDateReducer);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(newDate.getFullYear());

    

    return(
        <div className={MonthDateCSS.dateContainer}>
            <div className={MonthDateCSS.dateContainer__arrow}>&#8592;</div>
            <div className={MonthDateCSS.dateContainer__date}>{`${monthNames[selectedMonth]}, ${selectedYear}`}</div>
            <div className={MonthDateCSS.dateContainer__arrow}>&#8594;</div>
        </div>
    )
}