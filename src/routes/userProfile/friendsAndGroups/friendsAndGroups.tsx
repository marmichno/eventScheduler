import FriendsAndGroupsCSS from './friendsAndGroups.module.scss';
//hooks
import { useEffect, useState } from 'react';
//components
import { UserProfileGroups } from './userProfileGroups/UserProfileGroups';
import { UserProfileFriends } from './userProfileFriends/UserProfileFriends';

export const FriendsAndGroups = () => {

    const [componentType, setComponentType] = useState("friends");
    const [searchbarInput, setSearchbarInput] = useState("");

    const renderComponent = () => {
        if (componentType === "friends") {
            return <UserProfileFriends searchedInput={searchbarInput}/>
        } else if (componentType === "groups") {
            return <UserProfileGroups searchedInput={searchbarInput}/>
        }
    }

    const renderButtons = () => {
        if (componentType === "friends") {
            return (
                <>
                    <button
                        className={`${FriendsAndGroupsCSS.mainContainer__componentTypeButtons__button} ${FriendsAndGroupsCSS['mainContainer__componentTypeButtons__button--active']}`}
                        onClick={() => setComponentType("friends")}>
                        friends
                    </button>
                    <button
                        className={FriendsAndGroupsCSS.mainContainer__componentTypeButtons__button}
                        onClick={() => setComponentType("groups")}>
                        groups
                    </button>
                </>
            )
        } else if (componentType === "groups") {
            return (
                <>
                    <button
                        className={FriendsAndGroupsCSS.mainContainer__componentTypeButtons__button}
                        onClick={() => setComponentType("friends")}>
                        friends
                    </button>
                    <button
                        className={`${FriendsAndGroupsCSS.mainContainer__componentTypeButtons__button} ${FriendsAndGroupsCSS['mainContainer__componentTypeButtons__button--active']}`}
                        onClick={() => setComponentType("groups")}>
                        groups
                    </button>
                </>
            )
        }
    }

    return (
        <div className={FriendsAndGroupsCSS.mainContainer}>
            <div className={FriendsAndGroupsCSS.mainContainer__contentDescription}>
                <h2>friends and groups</h2>
            </div>
            <div className={FriendsAndGroupsCSS.mainContainer__componentTypeButtons}>
                {renderButtons()}
            </div>
            <div className={FriendsAndGroupsCSS.mainContainer__searchbarContainer}>
                <input placeholder="type to search" onChange={(e) => setSearchbarInput(e.target.value)}></input>
            </div>
            <div className={FriendsAndGroupsCSS.mainContainer__content}>
                {renderComponent()}
            </div>
        </div>
    )
}