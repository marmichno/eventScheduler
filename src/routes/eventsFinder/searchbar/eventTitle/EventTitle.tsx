import EventTitleCSS from './eventTitle.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
//actions
import { filterEventsByNameMain } from '../../../../actions';

export const EventTitle = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={EventTitleCSS.mainContainer}>
            <input onChange={(e) => dispatch(filterEventsByNameMain(e.target.value))} className={EventTitleCSS.mainContainer__input} placeholder="event name" type="text"></input>
        </div>
    )
}