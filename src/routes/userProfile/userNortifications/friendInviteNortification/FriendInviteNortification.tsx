import FriendInviteNortificationCSS from './friendInviteNortification.module.scss';
//hooks
import { useEffect, useState } from "react";
//requests
import { userFriendRequest } from "./requests/userFriendRequest";
import { userFriendRequestHandle } from './requests/userFriendRequestHandle';

interface FriendRequest {
    id: number,
    dateTime: string,
    userId: number,
    invitationStatus: string,
    invitationType: string
}

export const FriendInviteNortification = () => {

    const [nortificationsFriendRequest, setNortificationsFriendRequest] = useState<Array<FriendRequest>>([]);

    useEffect(() => {
        userNortificationsGetRequest();
    }, []);

    const userNortificationsGetRequest = async () => {
        const response = await userFriendRequest();
        if (response.status === 200) {
            setNortificationsFriendRequest(response.data);
        }
    }

    const userFriendRequestPostHandle = async (e: any) => {
        const eventId = e.target.dataset.eventid;
        const action = e.target.dataset.action;
        const response = await userFriendRequestHandle(eventId, action);
        if (response.status === 200) {
            userNortificationsGetRequest();
        }
    }

    return (
        <>
            {nortificationsFriendRequest.length > 0 ?
                nortificationsFriendRequest.map(val => {
                    return (
                        <div className={FriendInviteNortificationCSS.mainContainer}>
                            <div className={FriendInviteNortificationCSS.mainContainer__contentContainer}>
                                <div className={FriendInviteNortificationCSS.mainContainer__contentContainer__avatar}>
                                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                                </div>
                                <div className={FriendInviteNortificationCSS.mainContainer__contentContainer__textContent}>
                                    <p>Friend request from: {val.userId}</p>
                                    <div className={FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons}>
                                        <button
                                            className={`${FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons__button} 
                                        ${FriendInviteNortificationCSS['mainContainer__contentContainer__textContent__buttons__button--accept']}`}
                                            data-action={true}
                                            data-eventid={val.id}
                                            onClick={(e) => userFriendRequestPostHandle(e)}
                                        >
                                            accept
                                        </button>
                                        <button
                                            className={`${FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons__button} 
                                        ${FriendInviteNortificationCSS['mainContainer__contentContainer__textContent__buttons__button--decline']}`}
                                            data-action={false}
                                            data-eventid={val.id}
                                            onClick={(e) => userFriendRequestPostHandle(e)}
                                        >
                                            decline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                : null
            }
        </>
    )
}