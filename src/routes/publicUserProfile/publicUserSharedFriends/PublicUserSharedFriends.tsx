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
        <div className={PublicUserSharedFriendsCSS.mainContainer}>
            <div className={PublicUserSharedFriendsCSS.mainContainer__headerContainer}>
                <h1>Shared friends</h1>
            </div>
            <div className={PublicUserSharedFriendsCSS.mainContainer__hrSpacing}>
                <hr></hr>
            </div>
            <hr className={PublicUserSharedFriendsCSS.mainContainer__hrBreak}></hr>
            <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer}>
                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>

                <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend}>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__imageContainer}>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div>
                    <div className={PublicUserSharedFriendsCSS.mainContainer__friendsContainer__friend__nameContainer}>
                        <p>Owchachi</p>
                        <p>mmichno179@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}