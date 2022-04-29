import React, { useState, useEffect, useRef, useCallback } from 'react'
import { AxiosInstance } from '@utils/http'
import ProductItem from '@components/client/Products/productItem'
import Loading from '@components/client/Commons/loading'


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
        // q : query ? query.q : '',
        // TODO : solve this 
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

      <div className="grid grid-cols-4">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum nihil eos ratione quam minus, ea fuga voluptate aspernatur, atque nobis non illum vitae pariatur amet voluptatum facere? Quisquam, possimus.
        </div>
        <div className='grid col-span-3 grid-cols-4'>
          <div class="text-black m-4 col-span-4" >
            <ol class="list-none p-0 inline-flex">
              <li class="flex items-center pl-4">
                <a href="#">تمام محصولات</a>
              </li>
              <li class="flex items-center pl-4">
                <a href="#">محصولات ویژه</a>
              </li>
              <li class="flex items-center pl-4">
                <a href="#">پربازدیدترین</a>
              </li>
              <li className='pl-4'>
                <a href="#" class="text-gray-500" aria-current="page">پرفروش ترین</a>
              </li>
            </ol>
          </div>
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
