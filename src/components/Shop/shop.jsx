import React, { useState, useEffect, useRef, useCallback } from 'react'
import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'


export default function ShopJozi() {
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
        setSkip(skip += 10)
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
        skip
      }
    }).then(result => {
      setProducts([...products, ...result.data['data']])
      setHasMore(result.data['data'].length > 0)
      setLoading(false)
    })
  }, [skip])


  return (
    <>
      <div className='grid grid-cols-4'>
        {
          products.map((product, index) => {
            if (products.length === index + 1) {
              return <div ref={lastProductElementRef}><ProductItem product={product} /></div>
            } else {
              return <div><ProductItem product={product} /></div>
            }

          })
        }
      </div>
      <div className='w-full bg-rose-600 p-4'>{loading && 'loading'}</div>
    </>
  )
}
