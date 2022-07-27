import {useEffect, useState} from 'react';
import {fetchAllUsers, fetchCatalog} from '../helpers/fetchAllUsers';
import { useParams } from 'react-router-dom';


const useCatalog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [catalog, setCatalog] = useState({});
    const params = useParams();

    useEffect(() => {

        fetchCatalog().then(
            ({ data }) => {
                const items = {}
                data.forEach(item => {
                    items[item.url.split('/').reverse().at(0)] = {
                        id: item.idCatalogo,
                        url: item.url,
                        items: item.ids.map((itemId, itemIdIndex) => (
                            {
                                id: itemId,
                                imageLink: item.image_links[itemIdIndex],
                                title: item.titles[itemIdIndex],
                                link: item.links[itemIdIndex]
                            }
                        ))
                    }

                });
                setCatalog(items[params.id])
                setIsLoading(false)
            }
        );
    }, [])
    return{catalog, isLoading}
}

export default useCatalog;