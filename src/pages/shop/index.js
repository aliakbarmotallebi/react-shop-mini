import React from "react";
import Config from "@utils/Config";
import Card from "@components/client/card/card";
import {fetchShopProduct} from "@utils/Services";

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


export async function getServerSideProps() {
    const {shop} = Config.services.shop
    const products = await fetchShopProduct(`${shop}`);
    if (!products) {
        return {
            notFound: true,
        }
    }
    return {props: products};

}

export default Shop;