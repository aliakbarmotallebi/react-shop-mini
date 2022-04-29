import React from 'react'
import FilterItem from './filterItem'

export default function Filter() {
  const filters = [
    {
      slug: "محصولات ویژه",
      name: "MOST_SPECIAL",
      value: 3
    },
    {
      slug: "پرفروش ترین",
      name: "MOST_SELL",
      value: 2
    },
    {
      slug: "پربازدیدترین",
      name: "MOST_VIEW",
      value: 1
    }
  ]

  return (
    <div className="text-black my-4 col-span-4 bg-white p-4 rounded-md" >
      <ol className="list-none p-0 inline-flex">
        {filters.map((filterItem , id) =>
          <FilterItem key={id} {...filterItem} />
        )}
      </ol>
    </div>
  )
}
