import PublicUserProfileCSS from './publicUserProfile.module.scss';
//hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
//components
import { PublicUserSharedFriends } from './publicUserSharedFriends/PublicUserSharedFriends';
import { PublicUserSharedGroups } from './publicUserSharedGroups/PublicUserSharedGroups';
import { PublicUserDetails } from './publicUserDetails/PublicUserDetails';
import { Navbar } from '../../components/navbar/Navbar';
//requests
import { getUserByName } from './requests/getUserByName';

interface User {
    id: number,
    name: string,
    description: string,
    email: string,
    inviteToFriend: string,
    friendsList: [
        {
            id: number,
            name: string
        }
    ]
}

export const PublicUserProfile = (state: any) => {

    const location = useLocation();

    const [userExists, setUserExists] = useState(true);
    const [userData, setUserData] = useState<User | undefined>(undefined);

    useEffect(() => {
        checkIfUserExists()
    }, [])

    const checkIfUserExists = async () => {
        const passedState = state.location.state;
        let response;

        if (passedState !== undefined) {
            response = await getUserByName(passedState.userName);
            console.log(response.data);
        } else {
            const url = location.pathname;
            const userName = url.split("/")[2];
            response = await getUserByName(userName);
        }

        if (response.data.length > 0) {
            setUserExists(true);
            setUserData(response.data[0]);
        } else if (response.data.length === 0) {
            setUserExists(false);
        }
    }

    const renderUserData = () => {
        if (userExists) {
            if (userData !== undefined) {
                return (
                    <>
                        <PublicUserDetails passedUserData={
                            {
                                id: userData.id,
                                inviteToFriend: userData.inviteToFriend,
                                name: userData.name,
                                description: userData.description,
                                email: userData.email
                            }
                        }
                        />
                        <PublicUserSharedFriends passedUserFriends={
                            {
                                friendsList: userData.friendsList
                            }
                        }
                        />
                        <PublicUserSharedGroups />
                    </>
                )
            }
        } else {
            return (
                <div>
                    <h2>something went wrong</h2>
                </div>
            )
        }
    }

    return (
        <div className={PublicUserProfileCSS.mainContainer}>
            <Navbar />
            {renderUserData()}
        </div>
    )
}