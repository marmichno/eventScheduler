//components
import { DaySchedule } from "./day/DaySchedule";
import { WeekSchedule } from "./week/weekSchedule/WeekSchedule";
import { MonthSchedule } from "./month/monthSchedule/MonthSchedule";
//hooks
import { useAppSelector } from "../../../hooks";

export const Schedule = () => {

    const scheduleType = useAppSelector(state => state.scheduleTypeReducer);

    const renderSwitch = (scheduleType: string) => {
        switch (scheduleType) {
            case 'month':
                return <MonthSchedule />
            case 'week':
                return <WeekSchedule />
            case 'day':
                return <DaySchedule />
        }
    }

    return (
        <>
            {renderSwitch(scheduleType)}
        </>
    )

}