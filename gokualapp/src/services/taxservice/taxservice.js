
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getTaxDropDownData() {
    const taxData = authFetch.get(
        `${url.getTax}`,
    );
    return await taxData;
}