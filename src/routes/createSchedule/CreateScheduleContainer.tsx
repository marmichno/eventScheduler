// css
import CreateScheduleContainerCSS from './createScheduleContainer.module.scss';
// components
import {MonthSchedule} from './monthSchedule/MonthSchedule';
import {CreateScheduleChangeDate} from './changeDate/CreateScheduleChangeDate';

export const CreateScheduleContainer: React.FC = () => {
    return(
        <div className={CreateScheduleContainerCSS.mainContainer}>
            <CreateScheduleChangeDate/>
            <MonthSchedule/>
        </div>
    )
}