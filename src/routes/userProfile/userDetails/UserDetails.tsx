import UserDetailsCSS from './userDetails.module.scss';
//hooks
import { useState, useEffect } from 'react';
//icons
import {AiOutlineMail} from 'react-icons/ai';

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

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo !== null) {
            setUserInfo(JSON.parse(userInfo));
        }
    }, []);

    useEffect(() => {
        console.log(userInfo);
    },[userInfo]);


    return (
        <div className={UserDetailsCSS.mainContainer}>
            <div className={UserDetailsCSS.mainContainer__avatarContainer}>
                <div className={UserDetailsCSS.mainContainer__avatarContainer__nameContainer}>
                    <h2 className={UserDetailsCSS.mainContainer__avatarContainer__nameContainer__userName}>{userInfo ? userInfo.name : null}</h2>
                </div>
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
            </div>

            <div className={UserDetailsCSS.mainContainer__descriptionContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore natus libero neque, recusandae exercitationem dignissimos sit harum voluptatum ut iusto? Alias laborum commodi earum blanditiis provident aliquam assumenda quo. </p>
            </div>

            <div className={UserDetailsCSS.mainContainer__emailContainer}>
                <AiOutlineMail/>
                <p>{userInfo ? userInfo.email : null}</p>
            </div>
        </div>
    )
}