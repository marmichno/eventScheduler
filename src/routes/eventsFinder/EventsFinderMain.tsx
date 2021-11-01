import EventsFinderCSS from './eventsFinder.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { DisplayEventsContainer } from './displayEvents/DisplayEventsContainer';
import { SearchOptionsContainer } from './searchOptions/SearchOptionsContainer';

export const EventsFinderMain = () => {
    return(
        <div className={EventsFinderCSS.mainContainer}>
            <Navbar/>
            <SearchOptionsContainer/>
            <DisplayEventsContainer/>
        </div>
    )
}