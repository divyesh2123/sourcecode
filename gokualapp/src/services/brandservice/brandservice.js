
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getBrandDropDownData() {
    const brandData = authFetch.get(
        `${url.getBrand}`,
    );
    return await brandData;
}