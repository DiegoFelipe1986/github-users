import {useEffect, useState} from 'react';
import {fetchAllUsers} from '../helpers/fetchAllUsers';


const useGithub = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [devices, setdevices] = useState([]);

    useEffect(() => {

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