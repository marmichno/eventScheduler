import UserProfileFriendsCSS from './userProfileFriends.module.scss';
//hooks
import { useState } from 'react';

export const UserProfileFriends = () => {

    const [users, setUsers] = useState([{
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    },
    {
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    },
    {
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    },
    {
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    },
    {
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    },
    {
        "id": 1,
        "name": "User1",
        "description": "First user",
        "email": "user@api.pl",
        "inviteToFriend": "UNAVAILABLE",
        "friendsList": [
            {
                "id": 2,
                "name": "User2"
            }
        ]
    }
    ])

    return (
        <div className={UserProfileFriendsCSS.mainContainer}>
            {users.map(val => {
                return(
                    <div className={UserProfileFriendsCSS.mainContainer__friendContainer}>
                        <div className={UserProfileFriendsCSS.mainContainer__friendContainer__avatarContainer}>
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                        </div>
                        <div className={UserProfileFriendsCSS.mainContainer__friendContainer__nameContainer}>
                            <p>{val.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}