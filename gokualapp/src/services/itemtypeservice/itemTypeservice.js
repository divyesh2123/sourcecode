
import url from '../../helper/url/applicatinoUrl'
import authFetch from '../auth';
export async function getItemDropDownData() {
    const itemTypeData = authFetch.get(
        `${url.itemType}`,
    );
    return await itemTypeData;
}