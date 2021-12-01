import { Id } from 'react-toastify';
import PublicUserSharedFriendsCSS from './publicUserSharedFriends.module.scss';

interface UserFriends {
    friendsList: [
        {
            "id": number,
            "name": string
        }
    ]
}

export const PublicUserSharedFriends = ({ passedUserFriends }: { passedUserFriends: UserFriends }) => {

    console.log(passedUserFriends);

    return (
        <div>
            public user shared friends
        </div>
    )
}