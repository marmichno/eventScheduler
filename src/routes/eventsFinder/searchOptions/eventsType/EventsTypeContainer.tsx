import EventsTypeCSS from './eventsType.module.scss';
//hooks
import { useAppSelector } from '../../../../hooks';

export const EventsTypeContainer = () => {

    const isLogged = useAppSelector(state => state.isLoggedReducer);

    const renderButtons = () => {
        if(isLogged){
            return(
                <div className={EventsTypeCSS.mainContainer}>
                    <div className={EventsTypeCSS.mainContainer__active}>private</div>
                    <div className={EventsTypeCSS.mainContainer__notActive}>public</div>
                </div>
            )
        }else{
            return null
        }
    }

    return(
        renderButtons()
    )
}