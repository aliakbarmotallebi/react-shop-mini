import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'
import NoProductFound from './components/noProductFound'


export default function ShopJozi({ page, q, categoryId, slug, mainCategoryId }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showNoProduct, setShowNoProduct] = useState(false)

  const productsOnPage = 28
  page = page ? parseInt(page) : 1

  useEffect(() => {
    setLoading(true)
    setShowNoProduct(false)


    AxiosInstance(mainCategoryId ?
      {
        url: "products/category/" + mainCategoryId,
        params: {
          q: q ? q : '',
          count: productsOnPage,
          skip: (page - 1) * productsOnPage,
        }
      }
      : categoryId ? {
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

        if (result.data['data'].length <= 0) setShowNoProduct(true)
        setProducts(result.data['data'])
        setLoading(false)
      })
  }, [page, q, categoryId])

  return (
    <div className='container'>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        <div className='pt-3 w-full'>
          <div className='border rounded-md px-3 py-6 w-full'>
            <span className='text-slate-700 text-lg font-yekan-bold'>فیلتر : {slug ? <span className='text-sm text-blue-600'>{slug}</span> : <span className='text-sm text-blue-600'>بدون فیلتر</span>}</span>

          </div>
          {/* TODO : somthing here  */}
        </div>
        <div className='w-full md:col-span-3 col-span-4'>
          <div className='grid  md:grid-cols-4 grid-cols-2'>

            {/* <Filter /> */}
            {
              loading ? <div className='md:col-span-4 col-span-2 my-10'><Loading /></div> :
                products.map((product, index) =>
                  <ProductItem key={product.Id} product={product} />
                )
            }
          </div>
          <div className='flex justify-center gap-3 w-full col-span-4 py-8'>

            {mainCategoryId ?
              <>
                {page > 1 && <Link href={`/shop/mainCategory/${mainCategoryId}/${slug}?page=${page - 1}`}>
                  <a>
                    <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
                  </a>
                </Link>}
                {products.length >= productsOnPage &&
                  <Link href={`/shop/mainCategory/${mainCategoryId}/${slug}?page=${page + 1}`}>
                    <a>
                      <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
                    </a>
                  </Link>
                }
              </>
              : categoryId ?
                <>
                  {page > 1 && <Link href={`/shop/category/${categoryId}/${slug}?page=${page - 1}`}>
                    <a>
                      <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
                    </a>
                  </Link>}
                  {products.length >= productsOnPage &&
                    <Link href={`/shop/category/${categoryId}/${slug}?page=${page + 1}`}>
                      <a>
                        <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
                      </a>
                    </Link>
                  }
                </>
                :
                <>
                  {page > 1 && <Link href={q ? { pathname: 'shop', query: { q, page: page - 1 } } : { pathname: 'shop', query: { page: page - 1 } }}>
                    <a>
                      <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
                    </a>
                  </Link>}
                  {products.length >= productsOnPage &&
                    <Link href={q ? { pathname: 'shop', query: { q, page: page + 1 } } : { pathname: 'shop', query: { page: page + 1 } }}>
                      <a>
                        <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
                      </a>
                    </Link>
                  }
                </>
            }
          </div>
          {showNoProduct && <NoProductFound />}
        </div>
      </div>
    </div>
  )
}
