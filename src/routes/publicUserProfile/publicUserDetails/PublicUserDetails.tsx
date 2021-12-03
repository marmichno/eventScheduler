import PublicUserDetailsCSS from './publicUserDetails.module.scss';

interface UserData {

    name: string,
    description: string,
    email: string
}

export const PublicUserDetails = ({ passedUserData }: { passedUserData: UserData }) => {

    console.log(passedUserData);

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
                    <button>Ivnite to friends</button>
                </div>
            </div>
        </div>
    )
}