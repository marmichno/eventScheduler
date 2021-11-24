import FriendInviteNortificationCSS from './friendInviteNortification.module.scss';
//hooks
import { useEffect, useState } from "react";
//requests
import { userFriendRequest } from "./requests/userFriendRequest";

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
    }, [])

    const userNortificationsGetRequest = async () => {
        const response = await userFriendRequest();
        if (response.status === 200) {
            setNortificationsFriendRequest([
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                },
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                },
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                },
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                },
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                },
                {
                    "id": 1,
                    "dateTime": "2021-10-28T19:44:22",
                    "userId": 2,
                    "invitationStatus": "WAITING",
                    "invitationType": "SENT"
                }
            ])
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
                                    <p>Friend request from: Owchachi</p>
                                    <div className={FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons}>
                                        <button
                                            className={`${FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons__button} 
                                        ${FriendInviteNortificationCSS['mainContainer__contentContainer__textContent__buttons__button--accept']}`}
                                        >
                                            accept
                                        </button>
                                        <button
                                            className={`${FriendInviteNortificationCSS.mainContainer__contentContainer__textContent__buttons__button} 
                                        ${FriendInviteNortificationCSS['mainContainer__contentContainer__textContent__buttons__button--decline']}`}
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