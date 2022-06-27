import React, { useState, useEffect } from 'react'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'


export default function ShopJozi({ query }) {

  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(20)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)


  useEffect(() => {
    console.log(query)

    setLoading(true)
    AxiosInstance({
      url: "products",
      params: {
        count: 12,
        q: query ? query.q : '',
        skip,
      }
    }).then(result => {
      setProducts(result.data['data'])
      setLoading(false)
    })
  }, [])

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
