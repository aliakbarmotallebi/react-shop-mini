import React, { useState, useEffect, useRef, useCallback } from 'react'

import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'
import Filter from './filter/filter'
import CustomHead from '@components/client/header/customHead'
import Titles from '@utils/Titles'


export default function ShopJozi({ query }) {
  const [products, setProducts] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(true)


  const observe = useRef()
  const lastProductElementRef = useCallback(node => {
    if (loading) return
    if (observe.current) observe.current.disconnect()
    observe.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setSkip(skip += 12)
      }
    })
    if (node) observe.current.observe(node)
  }, [hasMore, loading])

  useEffect(() => {
    setLoading(true)
    AxiosInstance({
      url: "products",
      params: {
        count: 12,
        q: query ? query.q : '',
        skip,
      }
    }).then(result => {
      setProducts([...products, ...result.data['data']])
      setHasMore(result.data['data'].length > 0)
      setLoading(false)
    })
  }, [skip])



  return (
    <>
      <CustomHead title={Titles.titles.shop} />
      <div className="grid grid-cols-4">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum nihil eos ratione quam minus, ea fuga voluptate aspernatur, atque nobis non illum vitae pariatur amet voluptatum facere? Quisquam, possimus.
        </div>
        <div className='grid col-span-3 grid-cols-4'>
          <Filter />
          {
            products.map((product, index) => {
              if (products.length === index + 1) {
                return <div key={product.Id} ref={lastProductElementRef}>< ProductItem product={product} /></div>
              } else {
                return <div key={product.Id} ><ProductItem product={product} /></div>
              }

            })
          }
          {loading && (<div className='col-span-4 my-4'><Loading /></div>)}
        </div>


      </div>
    </>
  )
}
