import authFetch from "../auth";
import url from '../../helper/url/applicatinoUrl'
export async function productListService(storeId) {
    const productData = authFetch.get(
        `${url.getProductList}`,
    );
    return await productData;
}