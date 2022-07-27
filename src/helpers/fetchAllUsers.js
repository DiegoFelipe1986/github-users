import { githubApi } from '../api/githubApi';


export const fetchAllUsers = async () => {

    const resp = await githubApi.get('/concept-test');
    const ctList = resp.data;

    return ctList;

}

export const fetchCatalog = async () => {

    const resp = await githubApi.get('/concept-test');
    const ctList = resp;

    return ctList;

}


const trasformGh = (ghlist) => {
    const ghArr = ghlist.map(res =>{

        return {
            image: res.image,
            name: res.name,
            price: res.price,
            meta: res.meta
        }
    });

    return ghArr;
}
