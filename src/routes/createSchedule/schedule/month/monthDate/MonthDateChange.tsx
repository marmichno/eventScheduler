//css
import MonthDateCSS from './monthDate.module.scss';
//hooks
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../hooks';
import { useAppDispatch } from '../../../../../hooks';
//actions
import { monthChangeDate } from '../../../../../actions';

export const MonthDate = () => {

    const dispatch = useAppDispatch();

    const selectedDate = useAppSelector(state => state.monthDateReducer);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    return(
        <div className={MonthDateCSS.dateContainer}>
            <div className={MonthDateCSS.dateContainer__arrow} onClick={() => dispatch(monthChangeDate('previous'))}>&#8592;</div>
            <div className={MonthDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year}`}</div>
            <div className={MonthDateCSS.dateContainer__arrow} onClick={() => dispatch(monthChangeDate('next'))}>&#8594;</div>
        </div>
    )
}