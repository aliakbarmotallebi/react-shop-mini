import React from "react"
import Card from "@components/client/card/card";

const ProductItem = ({ product }) => {
    return (
        <div className='p-1'>
            <Card product={product} />
        </div>
    )
}
export default ProductItem