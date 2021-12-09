import PublicUserDetailsCSS from './publicUserDetails.module.scss';
//requests
import { inviteUserToFriends } from './requests/inviteUserToFriends';

interface UserData {
    id: number,
    inviteToFriend: string,
    name: string,
    description: string,
    email: string
}

export const PublicUserDetails = ({ passedUserData }: { passedUserData: UserData }) => {

    const inviteUserToFriendsPost = async () => {
        const response = await inviteUserToFriends(passedUserData.id);
    }

    const renderInviteButton = () => {
        const canUserBeInvited = passedUserData.inviteToFriend;

        if (canUserBeInvited === "AVAILABLE") {
            return <button
                className={PublicUserDetailsCSS.mainContainer__contentContainer__inviteToFriendsContainer__btn}
                onClick={() => inviteUserToFriendsPost()}>Invite to friends</button>
        } else {

            let inviteMessage = "";

            if (canUserBeInvited === "INVITATION_FROM_USER_EXIST") {
                inviteMessage = "Invitation from user exist";
            } else if (canUserBeInvited === "ALREADY_INVITED") {
                inviteMessage = "User is already invited";
            } else if (canUserBeInvited === "UNAVAILABLE") {
                inviteMessage = "You cant invite yourself";
            }

            return <button
                className=
                {`${PublicUserDetailsCSS.mainContainer__contentContainer__inviteToFriendsContainer__btn} 
                    ${PublicUserDetailsCSS['mainContainer__contentContainer__inviteToFriendsContainer__btn--notActive']}`}
            >
                {inviteMessage}
            </button>
        }
    }

    return (
        <div className={PublicUserDetailsCSS.mainContainer}>
            <div className={PublicUserDetailsCSS.mainContainer__contentContainer}>
                <div className={PublicUserDetailsCSS.mainContainer__contentContainer__avatarContainer}>
                    <div className={PublicUserDetailsCSS.mainContainer__contentContainer__avatarContainer__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                        <div className={PublicUserDetailsCSS.mainContainer__contentContainer__avatarContainer__imageContainer__shadow}></div>
                    </div>
                </div>
                <div className={PublicUserDetailsCSS.mainContainer__contentContainer__detailsContainer}>
                    <h2 className={PublicUserDetailsCSS.mainContainer__contentContainer__detailsContainer__username}>{passedUserData.name}</h2>
                    <h2 className={PublicUserDetailsCSS.mainContainer__contentContainer__detailsContainer__email}>mmichno179@gmailc.om</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor accusantium culpa iusto atque commodi laborum placeat earum cum. Provident, repudiandae minima molestiae similique quae modi nisi sequi natus eum.</p>
                </div>
                <div className={PublicUserDetailsCSS.mainContainer__contentContainer__inviteToFriendsContainer}>
                    {renderInviteButton()}
                </div>
            </div>
        </div>
    )
}