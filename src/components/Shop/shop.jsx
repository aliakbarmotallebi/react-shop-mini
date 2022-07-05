import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'
import NoProductFound from './components/noProductFound'


export default function ShopJozi({ page, q, categoryId, slug }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const productsOnPage = 28
  page = page ? parseInt(page) : 1

  useEffect(() => {
    setLoading(true)
    AxiosInstance(categoryId ? {
      url: "products/subcategory/" + categoryId,
      params: {
        q: q ? q : '',
        count: productsOnPage,
        skip: (page - 1) * productsOnPage,
      }
    } : {
      url: "products",
      params: {
        q: q ? q : '',
        count: productsOnPage,
        skip: (page - 1) * productsOnPage,
      }
    }).then(result => {
      setProducts(result.data['data'])
      setLoading(false)
    })
  }, [page, q, categoryId])

  return (
    <div className='container'>
      <div className="grid md:grid-cols-4">
        <div>
          {/* TODO : somthing here  */}
        </div>
        <div className='w-full md:col-span-3 col-span-4'>
          <div className='grid  md:grid-cols-4 grid-cols-2'>

            {/* <Filter /> */}
            {
              loading ? <div className='md:col-span-4 col-span-2 my-4'><Loading /></div> :
                products.map((product, index) =>
                  <ProductItem key={product.Id} product={product} />
                )
            }
          </div>
          {products.length > 0 ? <div className='flex justify-center gap-3 w-full col-span-4 py-8'>

            {categoryId ?
              <>
                {page > 1 && <Link href={`/shop/category/${categoryId}/${slug}?page=${page - 1}`}>
                  <a>
                    <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
                  </a>
                </Link>}

                <Link href={`/shop/category/${categoryId}/${slug}?page=${page + 1}`}>
                  <a>
                    <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
                  </a>
                </Link>
              </>
              :
              <>
                {page > 1 && <Link href={q ? { pathname: 'shop', query: { q, page: page - 1 } } : { pathname: 'shop', query: { page: page - 1 } }}>
                  <a>
                    <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
                  </a>
                </Link>}

                <Link href={q ? { pathname: 'shop', query: { q, page: page + 1 } } : { pathname: 'shop', query: { page: page + 1 } }}>
                  <a>
                    <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
                  </a>
                </Link>
              </>
            }
          </div>
            : <NoProductFound />}

        </div>

      </div>
    </div >
  )
}
