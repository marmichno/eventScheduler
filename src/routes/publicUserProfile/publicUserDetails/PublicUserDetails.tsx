import PublicUserDetailsCSS from './publicUserDetails.module.scss';

interface UserData {

    name: string,
    description: string,
    email: string
}

export const PublicUserDetails = ({ passedUserData }: { passedUserData: UserData }) => {

    console.log(passedUserData);

    return (
        <div>
            public user details
        </div>
    )
}