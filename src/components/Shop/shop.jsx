import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'


export default function ShopJozi({ page, q }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const productsOnPage = 28
  page = page ? parseInt(page) : 1

  useEffect(() => {
    setLoading(true)
    AxiosInstance({
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
  }, [page, q])

  return (
    <div className='container'>
      <div className="grid grid-cols-4">
        <div>
          {/* TODO : something here  */}
        </div>
        <div className='grid col-span-3 grid-cols-4'>
          <Filter />
          {
            loading ? <div className='col-span-4 my-4'><Loading /></div> :
              products.map((product, index) =>
              (
                <div key={product.Id} >
                  <ProductItem product={product} />
                </div>)
              )
          }
          <div className='flex justify-center gap-3 w-full col-span-4 py-8'>

            <Link href={q ? { pathname: 'shop', query: { q, page: parseInt(page) + 1 } } : ''}>
              <a>
                <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'>بعدی</span>
              </a>
            </Link>

            <Link href="">
              <a>
                <span className='bg-slate-100 text-sm rounded-sm px-4 py-2'> قبلی</span>
              </a>
            </Link>

          </div>
        </div>


      </div>
    </div >
  )
}
