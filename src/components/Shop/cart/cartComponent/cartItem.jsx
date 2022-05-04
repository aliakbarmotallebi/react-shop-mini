import React from 'react'
import Link from "next/link";
import textToSlug from "@helpers/textToSlug";

export default function CartItem({ cartItem }) {
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <Link href={`/product/${cartItem.product.ErpCode}/${textToSlug(cartItem.product.Name)}`}>
                    <a >
                        <img src={cartItem.product.Image} className="w-20 m-auto block rounded" alt="Thumbnail" />
                    </a>
                </Link>
            </td>
            <td>
                <a href="#">
                    <p className="mb-2 font-yekan-bold  md:ml-4">{cartItem.product.Name}</p>
                    <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                            <small className='bg-red-100  text-red-700 px-3 py-1 rounded-sm text-xs'>حذف محصول</small>
                        </button >
                    </form>
                </a>
            </td>
            <td className="justify-center md:justify-start md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">

                        <form >
                            <input type="number" value={cartItem.quantity}
                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                        </form>
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-lg  font-yekan-bold">
                    {cartItem.product.SellPrice.toLocaleString("fa-ir")}
                </span>
            </td>
            <td className="text-right">
                <span className="text-lg text-blue-600 font-yekan-bold">
                    {(cartItem.product.SellPrice * cartItem.quantity).toLocaleString("fa-ir")}
                </span>
            </td>
        </tr>
    )
}
