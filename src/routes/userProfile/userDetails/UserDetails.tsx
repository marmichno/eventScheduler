import UserDetailsCSS from './userDetails.module.scss';
//hooks
import { useState, useEffect } from 'react';

interface UserInfo {
    id: number,
    name: string,
    description: string,
    email: string,
    inviteToFriend: string,
    friendsList: Array<{
        id: number,
        name:string
    }>
}

export const UserDetails = () => {

    const [userDetailsInfo, setDetailsUserInfo] = useState<UserInfo | null>(null)

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        console.log(userInfo);

        if (userInfo !== null) {
            setDetailsUserInfo(JSON.parse(userInfo));
            console.log(userInfo);
        }
    }, []);

    return (
        <div className={UserDetailsCSS.mainContainer}>
            <div className={UserDetailsCSS.mainContainer__avatarContainer}>
                <div className={UserDetailsCSS.mainContainer__avatarContainer__imgContainer}>
                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                </div>
                <div className={UserDetailsCSS.mainContainer__avatarContainer__userDetailsContainer}>
                    <div className={UserDetailsCSS.mainContainer__avatarContainer__userDetailsContainer__nameContainer}>
                        <h2 className={UserDetailsCSS.mainContainer__avatarContainer__userDetailsContainer__nameContainer__userName}>{userDetailsInfo ? userDetailsInfo.name : null}</h2>
                    </div>
                    <div className={UserDetailsCSS.mainContainer__avatarContainer__userDetailsContainer__descriptionContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore natus libero neque, recusandae exercitationem dignissimos sit harum voluptatum ut iusto? Alias laborum commodi earum blanditiis provident aliquam assumenda quo. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}