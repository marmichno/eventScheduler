// css
import CreateScheduleContainerCSS from './createScheduleContainer.module.scss';
// components
import {MonthSchedule} from './month/monthSchedule/MonthSchedule';
import { WeekSchedule } from './week/weekSchedule/WeekSchedule';
import {CreateScheduleChangeDate} from '../date/CreateScheduleChangeDateContainer';
import { ScheduleManagement } from '../scheduleManagement/ScheduleManagement';
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
        }
    }

    return(
        <div className={CreateScheduleContainerCSS.mainContainer}>
            <CreateScheduleChangeDate/>
            <ScheduleManagement/>
            {renderSwitch(scheduleType)}
        </div>
    )
}