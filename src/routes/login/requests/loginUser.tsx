import axios from 'axios';

interface UserData {
    login: string,
    password: string
}

export const loginUser = async ({login, password}:UserData) =>{

    const config = {
        headers: {
            'Authorization': 'Basic ' + btoa(login + ":" + password)
        }
    }

    try{
        const request = await axios.get('http://localhost:8080/api/user', config);
        const response = await request.data;
        let headers = btoa(login + ":" + password);
        localStorage.setItem('user', headers);
        axios.defaults.headers.common['Authorization'] = `Basic ` + headers;
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
    }
}