import {useEffect, useState} from 'react';
import {fetchAllUsers} from '../helpers/fetchAllUsers';


const useGithub = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const [products, setUsers] = useState([]);
    const [devices, setdevices] = useState([]);

    useEffect(() => {
        // Loading devices
        fetchAllUsers().then(devices => {
            setIsLoading(false);

            setdevices(devices)
        });
    }, [])


    return{
        isLoading,

        devices
    }
}

export default useGithub;