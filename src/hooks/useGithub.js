import {useEffect, useState} from 'react';
import {fetchAllUsers} from '../helpers/fetchAllUsers';


const useGithub = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setUsers] = useState([]);

    useEffect(() => {
        // Loading users
        fetchAllUsers().then(products => {
            setIsLoading(false);
            setUsers(products)
        });
    }, [])


    return{
        isLoading,
        products
    }
}

export default useGithub;