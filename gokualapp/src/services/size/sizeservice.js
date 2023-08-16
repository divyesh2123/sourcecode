
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getSizeDropDownData() {
    const sizeData = authFetch.get(
        `${url.getSize}`,
    );
    return await sizeData;
}