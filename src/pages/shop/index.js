import React from "react";
import ShopJozi from "@components/Shop/shop";

const Shop = ({ query }) => {
    return (
        <ShopJozi query={query} />
    )
}
Shop.getInitialProps = ({ query }) => {
    return { query }
}

export default Shop;