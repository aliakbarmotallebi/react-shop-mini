import React from "react";
import ShopJozi from "@components/Shop/shop";
import CustomHead from "@components/client/header/customHead";
import Titles from "@utils/Titles";

const Shop = ({ query }) => {
    return (
        <>
            <CustomHead title={Titles.titles.shop} />
            <ShopJozi query={query} />
        </>

    )
}
Shop.getInitialProps = ({ query }) => {
    return { query }
}

export default Shop;