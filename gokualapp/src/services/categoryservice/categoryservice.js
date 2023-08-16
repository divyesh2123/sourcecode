
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getCateogryDropDownData() {
    const CategoryData = authFetch.get(
        `${url.categoryUrl}`,
    );
    return await CategoryData;
}