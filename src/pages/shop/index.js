import React from "react";
import Config from "@utils/Config";
import {AxiosInstance} from "@utils/http";
import Card from "@components/client/card/card";

const Shop = ({products}) => {
    return (
        <div className='grid grid-cols-5 gap-2 w-full'>
            {
                products.map((product) => (
                    <Card product={product}/>
                ))
            }
        </div>
    )
}
const fetchData = async (params) => await AxiosInstance
    .get(`${params}?count=10`, {})
    .then(res => ({
        products: res.data['data'],
    }))
    .catch((error) => (
            console.log(error)
        ),
    );

export async function getServerSideProps() {
    const {shop} = Config.services.shop
    const products = await fetchData(`${shop}`);
    if (!products) {
        return {
            notFound: true,
        }
    }
    return {props: products};

}

export default Shop;