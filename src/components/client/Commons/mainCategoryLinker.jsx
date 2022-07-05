import TextToSlug from '@helpers/textToSlug'
import Link from 'next/link'
import React from 'react'

export default function MainCategoryLinker({ children, mainCategoryId, categorySlug, style }) {
    return (
        <Link href={`/shop/mainCategory/${mainCategoryId}/${TextToSlug(categorySlug)}`}   >
            <a className={style}>
                {children}
            </a>
        </Link>
    )
}
