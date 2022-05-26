import React from "react";
import Config from "@utils/Config";
import { fetchProduct } from "@utils/Services";
import Product from "@components/Shop/product/product";

const product = ({ product }) => {
    return (
        <>
            <Product product={product} />
        </>

    )
}


export async function getServerSideProps(context) {
    const { erpcode } = context.query;
    const { product_page } = Config.services.product
    const product = await fetchProduct(`${product_page}${erpcode}`);
    if (!product) {
        return {
            notFound: true,
        }
    }
    return { props: product };

}

export default product;