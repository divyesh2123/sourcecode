import authFetch from "./auth";
import url from '../helper/url/applicatinoUrl'

async function loginAPI(payload) {

    debugger;

    const userData = authFetch.post(
        `${url.login}`,
        payload

    );
    return await userData;

}

export default loginAPI;
