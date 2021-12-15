import EventsContainerCSS from './eventsContainer.module.scss';
//components
import { EventMainPage } from './eventMainPage/EventMainPage';
import { Searchbar } from '../../searchbar/Searchbar';
import { SelectedEventMainPage } from './selectedEventMainPage/SelectedEventMainPage';
//hooks
import { useAppSelector } from '../../../../hooks';

export const EventsContainer = () => {

    const selectedEvent = useAppSelector(state => state.selectEventEventFinderReducer);

    const renderEvents = () => {
        if(selectedEvent === 0){
            return(
                <>
                    <Searchbar/>
                    <div className={EventsContainerCSS.mainContainer__eventsContainer}>
                        <EventMainPage/>
                    </div>
                </>
            )
        }else if(selectedEvent !== 0){
            return(
                <SelectedEventMainPage/>
            )
        }
    }

    return(
        <div className={EventsContainerCSS.mainContainer}>
            {renderEvents()}
        </div>
    )
}