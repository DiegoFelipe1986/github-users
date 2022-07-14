import { githubApi } from '../api/githubApi';


export const fetchAllUsers = async () => {

    const resp2 = await githubApi.get('/concept-test');
    const ghlist = resp2.data;

    return ghlist;

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
