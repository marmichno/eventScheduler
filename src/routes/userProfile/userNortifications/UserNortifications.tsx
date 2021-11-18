import UserNortificationsCSS from './userNortifications.module.scss';
//hooks
import {useEffect, useState} from 'react';
//requests
import {userFriendRequest} from "./requests/userFriendRequest";

export const UserNortifications = () => {

    const [nortificationsFriendRequest, setNortificationsFriendRequest] = useState<Array<object>>([]);

    useEffect(() => {
        userNortificationsGetRequest();
    },[])

    const userNortificationsGetRequest = async () => {
        const response = await userFriendRequest();
        if(response.status === 200){
            console.log(response.status);
            setNortificationsFriendRequest(response.data);
        }
    }

    return(
        <div className={UserNortificationsCSS.mainContainer}>
            {nortificationsFriendRequest.length > 0 ?
                nortificationsFriendRequest.map(val => {
                    return val
                })
                : null
            }
        </div>
    )
}