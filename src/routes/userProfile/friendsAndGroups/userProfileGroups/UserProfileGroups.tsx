import UserProfileGroupsCSS from "./userProfileGroups.module.scss"
//hooks
import { useState, useEffect } from "react"
import {FC} from 'react';

interface UserProps {
    searchedInput:string
}

interface GroupObject {
    groupName: string
}

export const UserProfileGroups: FC<UserProps> = ({searchedInput}: UserProps) => {

    const [groups, setGroups] = useState([
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
        {
            "groupName": "group"
        },
    ]);
    const [filteredGroups, setFilteredGroups] = useState<GroupObject[]>([]);

    useEffect(() => {
        filterGroups();
    },[searchedInput]);

    const filterGroups = () => {
        if(searchedInput.length === 0){
            setFilteredGroups(groups);
        }else{
            const regex = new RegExp(`^${searchedInput}`, "i");
            setFilteredGroups(groups.filter(val => (val.groupName).match(regex)))
        }
    }

    return (
        <div className={UserProfileGroupsCSS.mainContainer}>
            {filteredGroups.map(val => {
                return(
                    <div className={UserProfileGroupsCSS.mainContainer__groupContainer}>
                        <div className={UserProfileGroupsCSS.mainContainer__groupContainer__avatarContainer}>
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                        </div>
                        <div className={UserProfileGroupsCSS.mainContainer__groupContainer__nameContainer}>
                            <p>{val.groupName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}