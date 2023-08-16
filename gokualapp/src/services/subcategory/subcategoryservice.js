
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getSubCategoryDropDownData(category) {
    const subCategoryData = authFetch.get(
        `${url.getSubCategory(category)}`
    );
    return await subCategoryData;
}