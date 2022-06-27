import React from "react";
import ShopJozi from "@components/Shop/shop";
import CustomHead from "@components/client/header/customHead";
import Titles from "@utils/Titles";

const Shop = ({ query: { categoryId, slug, page } }) => {
    return (
        <>
            <CustomHead title={Titles.titles.shop} />

            <ShopJozi categoryId={categoryId} page={page} slug={slug} />
        </>

    )
}
Shop.getInitialProps = ({ query }) => {
    return { query }
}

export default Shop;