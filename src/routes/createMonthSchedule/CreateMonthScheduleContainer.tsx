// css
import '../../styles/index.scss';
import CreateMonthScheduleContainerCSS from './createMonthScheduleContainer.module.scss';
// components
import {Schedule} from './schedule/Schedule';

export const CreateMonthScheduleContainer: React.FC = () => {
    return(
        <div className={CreateMonthScheduleContainerCSS.mainContainer}>
            <Schedule/>
        </div>
    )
}