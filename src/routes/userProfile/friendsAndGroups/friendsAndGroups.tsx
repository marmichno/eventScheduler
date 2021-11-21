import FriendsAndGroupsCSS from './friendsAndGroups.module.scss';
//hooks
import { useState } from 'react';
//components
import { UserProfileGroups } from './userProfileGroups/UserProfileGroups';
import { UserProfileFriends } from './userProfileFriends/UserProfileFriends';

export const FriendsAndGroups = () => {

    const [componentType, setComponentType] = useState("friends");

    const renderComponent = () => {
        if (componentType === "friends") {
            return <UserProfileFriends />
        } else if (componentType === "groups") {
            return <UserProfileGroups />
        }
    }

    return (
        <div className={FriendsAndGroupsCSS.mainContainer}>
            <div className={FriendsAndGroupsCSS.mainContainer__contentDescription}>
                <h2>friends and groups</h2>
            </div>
            {renderComponent()}
        </div>
    )
}