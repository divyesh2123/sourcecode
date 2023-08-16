
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getPackDropDownData() {
    const packData = authFetch.get(
        `${url.getPack}`,
    );
    return await packData;
}