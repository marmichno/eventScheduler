//css
import DayScheduleCSS from './daySchedule.module.scss';

export const DaySchedule = () => {

    const hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
    '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00'];

    return(
        <div className={DayScheduleCSS.daySchedule}>
            {hours.map(value => {
                return( 
                    <div className={DayScheduleCSS.daySchedule__hourContainer}>
                        <div className={DayScheduleCSS.daySchedule__hourContainer__hour}>{value}</div>
                        <div className={DayScheduleCSS.daySchedule__hourContainer__events}></div>
                    </div>
                )
            })}
        </div>
    )
}