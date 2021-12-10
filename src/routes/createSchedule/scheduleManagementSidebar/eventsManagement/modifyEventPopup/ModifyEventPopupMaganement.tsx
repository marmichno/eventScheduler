import EventManagementCSS from './modifyEventPopupManagement.module.scss';
//components
import { AddNewEvent } from './addNewEvent/AddNewEvent';
import { RemoveEvent } from './removeEvent/RemoveEvent';
import { ModifyEvent } from './modifyEvent/ModifyEvent';
//hooks
import { useAppSelector } from '../../../../../hooks';
import { useAppDispatch } from '../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../actions';

export const ModifyEventPopupMaganement = () => {

    const dispatch = useAppDispatch();

    const selectedType = useAppSelector(state => state.popupEventTypeReducer);

    const popupRender = () => {
        switch(selectedType){
            case 'addNewEvent':
                return <AddNewEvent/>
            case 'removeEvent':
                return <RemoveEvent/>
            case 'modifyEvent':
                return <ModifyEvent/>
        }
    }

    return (
        <div className={EventManagementCSS.popupContainer}>
            {selectedType !== 'removeEvent' ?
                <div className={EventManagementCSS.popupContainer__close}>
                    <button onClick={() => dispatch(showEventPopup(false))}>x</button>
                </div>
            : null
            }
            {popupRender()}
        </div>
    )
}