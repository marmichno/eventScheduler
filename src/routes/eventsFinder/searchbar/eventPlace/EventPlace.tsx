import EventPlaceCSS from './eventPlace.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
//actions
import { filterEventsByLocationMain } from '../../../../actions';

export const EventPlace = () => {

    const dispatch = useAppDispatch();

    return(
        <div className={EventPlaceCSS.mainContainer}>
            <input onChange={(e) => dispatch(filterEventsByLocationMain(e.target.value))} type="text" className={EventPlaceCSS.mainContainer__input} placeholder="event location"></input>
        </div>
    )
}