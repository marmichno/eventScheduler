// css
import CreateScheduleMainContainerCSS from './createScheduleMainContainer.module.scss';
// components
import { CreateScheduleChangeDate } from './dateAndTypeTopBar/dateAndTypeTopBar';
import { ScheduleManagementSidebar } from './scheduleManagementSidebar/ScheduleManagementSidebar';
import { Navbar } from '../../components/navbar/Navbar';
import { Schedule } from './schedule/Schedule';
//actions
import { fetchAllUserEvents } from '../../actions';
//hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const CreateScheduleContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUserEvents());
    },[]);

    return (
        <div className={CreateScheduleMainContainerCSS.mainContainer}>
            <Navbar />
            <div className={CreateScheduleMainContainerCSS.mainContainer__contentContainer}>
                <CreateScheduleChangeDate />
                <ScheduleManagementSidebar />
                <Schedule />
            </div>
        </div>
    )
}