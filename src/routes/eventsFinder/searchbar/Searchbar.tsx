import SearchbarCSS from './searchbar.module.scss';
//components
import { EventTitle } from './eventTitle/EventTitle';
import { EventPlace } from './eventPlace/EventPlace';
import { EventDate } from './eventDate/EventDate';
import { EventsOrderBy } from './eventsOrderBy/EventsOrderBy';

export const Searchbar = () => {
    return(
        <div className={SearchbarCSS.mainContainer}>
            <EventTitle/>
            <EventPlace/>
            <EventDate/>
            <EventsOrderBy/>
        </div>
    )
}