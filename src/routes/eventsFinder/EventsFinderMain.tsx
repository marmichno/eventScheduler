import EventsFinderCSS from './eventsFinder.module.scss';
//components
import { DisplayEventsContainer } from './displayEvents/DisplayEventsContainer';
import { Searchbar } from './searchbar/Searchbar';
import { SearchOptionsContainer } from './searchOptions/SearchOptionsContainer';

export const EventsFinderMain = () => {
    return(
        <div className={EventsFinderCSS.mainContainer}>
            <Searchbar/>
            <SearchOptionsContainer/>
            <DisplayEventsContainer/>
        </div>
    )
}