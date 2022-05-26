import React from 'react'
import Link from 'next/link'
import textToSlug from "@helpers/textToSlug";

const ProductLinker = ({ children, productName, productErpCode, style }) => {
    return (
        <Link href={`/product/${productErpCode}/${textToSlug(productName)}`} className={style} >
            <a>
                {children}
            </a>
        </Link>
    )
}
export default ProductLinker;