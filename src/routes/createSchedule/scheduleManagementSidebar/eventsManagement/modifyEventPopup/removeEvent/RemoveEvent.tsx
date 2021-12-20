import RemoveEventCSS from './removeEvent.module.scss';
//components
import { showEventPopup } from '../../../../../../actions';
//hooks
import { useAppDispatch } from '../../../../../../hooks';
//requests
import { deleteEvent } from './requests/deleteEvent';

export const RemoveEvent = () => {

    const dispatch = useAppDispatch();

    const deleteEventRequest = async (e:any) => {
        const response = await deleteEvent(1);

    }

    return(
        <div className={RemoveEventCSS.container}>
            <div className={RemoveEventCSS.container__text}>
                <h2>Are you sure you want to delete event name?</h2>
            </div>
            <div className={RemoveEventCSS.container__buttons}>
                <button onClick={(e) => deleteEventRequest(e)}>yes</button>
                <button onClick={() => dispatch(showEventPopup(false))}>no</button>
            </div>
        </div>
    )
}