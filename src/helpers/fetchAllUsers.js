import { githubApi } from '../api/githubApi';


export const fetchAllUsers = async () => {
    const resp = await githubApi.get('/users');
    const ghlist = resp.data;

    return trasformGh(ghlist);

}


const trasformGh = (ghlist) => {
    const ghArr = ghlist.map(res =>{

        return {
            avatar_url: res.avatar_url,
            login: res.login,
            type: res.type,
            url: res.url,
            id: res.id,
        }
    });

    return ghArr;
}