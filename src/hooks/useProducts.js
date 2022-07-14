import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { githubApi } from '../api/githubApi';


export default () => {
    const [catalog, setCatalog] = useState({});


    const params = useParams();

    useEffect(() => {
        githubApi.get('/concept-test').then(
            ({ data }) => {
                const items = {}

                console.log(data)
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
              
            }
        );

    }, [])
    console.log(catalog)
    return {catalog}
}