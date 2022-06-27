import React, { useState, useEffect } from 'react'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'


export default function ShopJozi({ page, q }) {

  const productsOnPage = 28

  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(page && page > 1 ? productsOnPage : 0)
  const [loading, setLoading] = useState(true)
  const [perPage, setPerPage] = useState(page || 1)

  useEffect(() => {
    console.log(Math.abs(skip * (perPage - 1)))

    setLoading(true)
    AxiosInstance({
      url: "products",
      params: {
        q: q ? q : '',
        count: productsOnPage,
        skip: Math.abs(skip * (perPage - 1)),
      }
    }).then(result => {
      setProducts(result.data['data'])
      setLoading(false)
    })
  }, [page])

  return (
    <div className='container'>
      <div className="grid grid-cols-4">
        <div>
          {/* TODO : something here  */}
        </div>
        <div className='grid col-span-3 grid-cols-4'>
          <Filter />
          {
            products.map((product, index) =>
            (
              <div key={product.Id} >
                <ProductItem product={product} />
              </div>)
            )
          }
          {loading && (<div className='col-span-4 my-4'><Loading /></div>)}
        </div>


      </div>
    </div>
  )
}
