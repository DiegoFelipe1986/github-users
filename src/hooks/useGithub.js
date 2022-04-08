import {useEffect, useState} from 'react';
import {fetchAllUsers} from '../helpers/fetchAllUsers';


const useGithub = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Loading users
        fetchAllUsers().then(users => {
            setIsLoading(false);
            setUsers(users)
        });
    }, [])


    return{
        isLoading,
        users
    }
}

export default useGithub;