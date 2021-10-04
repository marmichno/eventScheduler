import AddEventCSS from './addEvent.module.scss';
//hooks
import { useAppDispatch } from '../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../actions';
import { popupEventType } from '../../../../../actions';

export const AddEvent = () => {

    const dispatch = useAppDispatch();

    const showAddPopup = () => {
        dispatch(popupEventType('addNewEvent'))
        dispatch(showEventPopup(true));
    }

    return(
        <div className={AddEventCSS.addEvent} onClick={showAddPopup}>Add new event</div>
    )
}