import AddEventCSS from './addEvent.module.scss';
//hooks
import { useAppDispatch } from '../../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../../actions';
import { popupEventType } from '../../../../../../actions';
//icons
import {BsFillCalendar2PlusFill} from 'react-icons/bs';

export const AddEvent = () => {

    const dispatch = useAppDispatch();

    const showAddPopup = () => {
        dispatch(popupEventType('addNewEvent'))
        dispatch(showEventPopup(true));
    }

    return(
        <div className={AddEventCSS.addEvent} onClick={showAddPopup}><p>Create new event</p><span><BsFillCalendar2PlusFill/></span></div>
    )
}