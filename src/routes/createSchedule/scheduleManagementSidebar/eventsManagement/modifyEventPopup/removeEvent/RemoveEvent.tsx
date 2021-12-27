import RemoveEventCSS from './removeEvent.module.scss';
//components
import { showEventPopup } from '../../../../../../actions';
//hooks
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../../../hooks';
import { useAppSelector } from '../../../../../../hooks';
//actions
import { fetchAllUserEvents } from '../../../../../../actions';
//requests
import { deleteEvent } from './requests/deleteEvent';

export const RemoveEvent = () => {

    const dispatch = useAppDispatch();
    const reduxDispatch = useDispatch();
    const selectedId = useAppSelector(state => state.chooseEventIdReducer);

    const deleteEventRequest = async () => {
        const response = await deleteEvent(selectedId);
        if (response.status === 200) {
            reduxDispatch(fetchAllUserEvents());
            dispatch(showEventPopup(false));
        }
    }

    return (
        <div className={RemoveEventCSS.container}>
            <div className={RemoveEventCSS.container__text}>
                <h2>Are you sure you want to delete event name?</h2>
            </div>
            <div className={RemoveEventCSS.container__buttons}>
                <button onClick={() => deleteEventRequest()}>yes</button>
                <button onClick={() => dispatch(showEventPopup(false))}>no</button>
            </div>
        </div>
    )
}