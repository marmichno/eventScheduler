// css
import CreateScheduleContainerCSS from './createScheduleContainer.module.scss';
// components
import {MonthSchedule} from './month/monthSchedule/MonthSchedule';
import { WeekSchedule } from './week/weekSchedule/WeekSchedule';
import { DaySchedule } from './day/DaySchedule';
import {CreateScheduleChangeDate} from '../date/CreateScheduleChangeDateContainer';
import { ScheduleManagement } from '../scheduleManagement/ScheduleManagement';
import { Navbar } from '../../../components/navbar/Navbar';
//hooks
import { useAppSelector } from '../../../hooks';

export const CreateScheduleContainer: React.FC = () => {

    const scheduleType = useAppSelector(state => state.scheduleTypeReducer);

    const renderSwitch = (scheduleType:string) =>{
        switch(scheduleType){
            case 'month':
                return <MonthSchedule/>
            case 'week':
                return <WeekSchedule/>
            case 'day':
                return <DaySchedule/>
        }
    }

    return(
        <div className={CreateScheduleContainerCSS.mainContainer}>
            <Navbar/>
            <div className={CreateScheduleContainerCSS.mainContainer__contentContainer}>
                <CreateScheduleChangeDate/>
                <ScheduleManagement/>
                {renderSwitch(scheduleType)}
            </div>
        </div>
    )
}