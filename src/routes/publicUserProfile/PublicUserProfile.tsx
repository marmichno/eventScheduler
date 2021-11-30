import PublicUserProfileCSS from './publicUserProfile.module.scss';
//hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
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

    const [userExists, setUserExists] = useState(false);
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        checkIfUserExists()
    },[])

    const checkIfUserExists = async () => {
        const passedState = state.location.state;
        let response;

        if(passedState !== undefined){
            response = await getUserByName(passedState.userName);
            console.log(response.data);
        }else{
            const url = location.pathname;
            const userName = url.split("/")[2];
            response = await getUserByName(userName);
        }

        if(response.length > 0){
            setUserExists(true);
            setUserData(response);
        }else if(response.length === 0){
            setUserExists(false);
        }
    }

    const renderUser = () => {
        if(userExists){
            return(
                <div>
                    <p>{userData.name}</p>
                </div>
            )
        }
    }

    return (
        <div className={PublicUserProfileCSS.mainContainer}>
            public user profile
        </div>
    )
}