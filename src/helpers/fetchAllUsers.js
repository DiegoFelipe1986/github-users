import { githubApi } from '../api/githubApi';


export const fetchAllUsers = async () => {
    const resp = await githubApi.get('/products');
    const ghlist = resp.data;

    return trasformGh(ghlist);

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