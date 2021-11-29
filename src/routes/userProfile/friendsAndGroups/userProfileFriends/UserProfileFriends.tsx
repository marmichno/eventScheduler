import UserProfileFriendsCSS from './userProfileFriends.module.scss';
//hooks
import { useState, useEffect } from 'react';
import { FC } from 'react';
//requests
import { getUsersByPartName } from './requests/getUsersByPartName';

interface UserProps {
    searchedInput: string
}

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

export const UserProfileFriends: FC<UserProps> = ({ searchedInput }: UserProps) => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers();
    }, [searchedInput]);

    const getUsers = async () => {
        if (searchedInput.length === 0) {
            const friends = localStorage.getItem('userInfo');
            if (friends !== null) {
                setUsers(JSON.parse(friends));
            }
        } else {
            const response = await getUsersByPartName(searchedInput);
            console.log(response);
            if (response.status === 200) {
                setUsers(response.data);
            }
        }
    }

    return (
        <div className={UserProfileFriendsCSS.mainContainer}>
            {users.length > 0 ? users.map(val => {
                return (
                    <div className={UserProfileFriendsCSS.mainContainer__friendContainer}>
                        <div className={UserProfileFriendsCSS.mainContainer__friendContainer__avatarContainer}>
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                        </div>
                        <div className={UserProfileFriendsCSS.mainContainer__friendContainer__nameContainer}>
                            <p>{val.name}</p>
                        </div>
                    </div>
                )
            }) :
                <div className={UserProfileFriendsCSS.mainContainer__friendContainer}></div>
            }
        </div>
    )
}