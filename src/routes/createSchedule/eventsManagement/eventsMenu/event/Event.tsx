import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../hooks"

export const Event = () => {

    const selectedType = useAppSelector(state => state.eventTypeReducer);

    const eventRender = () => {
        if(selectedType === "private"){
            return(
                <div className={EventCSS.eventContainer}>
                    <div className={EventCSS.eventContainer__description}>Private</div>
                    <div className={EventCSS.eventContainer__action}>R</div>
                    <div className={EventCSS.eventContainer__action}>M</div>
                </div>
            )
        }else if(selectedType === "public"){
            return(
                <div className={EventCSS.eventContainer}>
                    <div className={EventCSS.eventContainer__description}>Public</div>
                    <div className={EventCSS.eventContainer__action}>R</div>
                    <div className={EventCSS.eventContainer__action}>M</div>
                </div>
            )
        }
    }

    return(
        <>
            {eventRender()}
        </>
    )
}