
import authFetch from '../auth';
import url from '../../helper/url/applicatinoUrl'

async function logoutAPI(payload) {
    const logoutData = authFetch.post(
        `${url.logoutAPI(payload)}`,
    );
    return await logoutData;
}

export  function getLoginUserData()
{

    const user = JSON.parse(sessionStorage.getItem("user"));

    return user;

}

export default logoutAPI;
