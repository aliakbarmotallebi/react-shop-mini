import {AxiosInstance} from "@utils/http";


export const fetchShopProduct = async (params) => {
    return await AxiosInstance
        .get(`${params}`, {
            params: {
                count: 10
            }
        })
        .then(res => ({
            products: res.data['data']
        }))
        .catch((error) => (
                console.log(error)
            ),
        );
}

export const fetchProduct = async (params) => {
    return await AxiosInstance.get(params)
        .then(res => ({
            product: res.data['data'],
        }))
        .catch((error) => (
                console.log(error)
            ),
        );

}

