//css
import ScheduleCSS from './schedule.module.scss';
//hooks
import { useEffect, useState, ChangeEvent } from "react";


export const Schedule: React.FC = () => {

    const newDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(newDate.getFullYear());

    const createArrayOfDays = (selectedMonth:number, selectedYear:number) => {
        let arrayOfDays = [];

        let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'];

        for(let i = 0; i < daysInMonth; i++){
            let whichDayIsIt = new Date(selectedYear, selectedMonth, i + 1).getDay();

            arrayOfDays.push(
                {
                    dayDate: (i + 1) < 10 ? parseInt(`0${i + 1}`) : (i + 1),
                    selectedMonth: (selectedMonth + 1) < 10 ? `0${selectedMonth + 1}` : (selectedMonth + 1),
                    selectedYear: selectedYear,
                    dayName: days[whichDayIsIt]
                }
            );
        }
        return arrayOfDays;
    }

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.dataset.direction === "next"){
            if(selectedMonth <= 10){
                setSelectedMonth(selectedMonth + 1);
            }else{
                setSelectedYear(selectedYear + 1);
                setSelectedMonth(0);
            }
        }else{
            if(selectedMonth !== 0){
                setSelectedMonth(selectedMonth - 1);
            }else{
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
            }
        }
    }

    return(
        <div className={ScheduleCSS.scheduleContainer}>

            <div className={ScheduleCSS.scheduleContainer__changeDate}>
                change date
            </div>

            <div className={ScheduleCSS.scheduleContainer__schedule}>
                {createArrayOfDays(selectedMonth, selectedYear).map((value, index) => {
                    return <div>{value.dayDate}</div>
                })}
            </div>

        </div>
    )
}