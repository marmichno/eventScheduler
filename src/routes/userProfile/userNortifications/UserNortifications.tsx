import UserNortificationsCSS from './userNortifications.module.scss';
//components
import { FriendInviteNortification } from './friendInviteNortification/FriendInviteNortification';

export const UserNortifications = () => {

    return(
        <div className={UserNortificationsCSS.mainContainer}>
            <div className={UserNortificationsCSS.mainContainer__contentDescription}>
                <h2>nortifications</h2>
            </div>
            
            <div className={UserNortificationsCSS.mainContainer__nortificationsContainer}>
                <FriendInviteNortification/>
            </div>
        </div>
    )
}