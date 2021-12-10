import RemoveEventCSS from './removeEvent.module.scss';
//components
import { showEventPopup } from '../../../../../../actions';
//hooks
import { useAppDispatch } from '../../../../../../hooks';

export const RemoveEvent = () => {

    const dispatch = useAppDispatch();

    return(
        <div className={RemoveEventCSS.container}>
            <div className={RemoveEventCSS.container__text}>
                <h2>Are you sure you want to delete event name?</h2>
            </div>
            <div className={RemoveEventCSS.container__buttons}>
                <button>yes</button><button onClick={() => dispatch(showEventPopup(false))}>no</button>
            </div>
        </div>
    )
}