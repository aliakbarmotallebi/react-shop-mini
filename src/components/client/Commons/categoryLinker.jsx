import React from 'react'
import Link from 'next/link'
import textToSlug from '@helpers/textToSlug'

const CategoryLinker = ({ children, categoryId, categorySlug, style }) => {


    return (
        <Link href={`/shop/category/${categoryId}/${textToSlug(categorySlug)}`}   >
            <a className={style}>
                {children}
            </a>
        </Link>
    )
}
export default CategoryLinker;