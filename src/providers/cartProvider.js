import React, { useReducer, useState, useEffect, useContext } from 'react'
import { useCookies } from 'react-cookie'
import CartContext from 'src/context/cartContext'
import AlertContext from 'src/context/alertContext';

function CartProvider({ children }) {
    const [cookie, setCookie, removeCookie] = useCookies()
    const [cartCookie, setCartCookie] = useState(cookie.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showCartButton, setShowCartButton] = useState(false)
    const [total, setTotal] = useState(0)
    const alert = useContext(AlertContext);

    function addItemToCart(product) {
        cartCookie
            ? setCartCookie(oldcart => [...oldcart, product])
            : setCartCookie([product])

    }
    function goRemoveCart() {
        removeCookie('cart');
        setCartCookie([]);
    }

    const handleAddToCart = (product) => {
        if (typeof (product.UnitFew) == 'number') {
            addItemToCart({
                Name: product.Name,
                ErpCode: product.ErpCode,
                LastBuyPrice: product.LastBuyPrice,
                quantity: itemnumber
            })
        } else {
            addItemToCart({
                Name: product.Name,
                ErpCode: product.ErpCode,
                LastBuyPrice: product.LastBuyPrice,
                quantity: floatitemNumber,
            })
        }
        setShowCartButton(true)
        alert.success('به سبد خرید اضافه شد')
    }

    useEffect(() => {
        cookie.cart &&
            setTotal(cookie.cart.length)

    }, [cookie])

    useEffect(() => {

        cartCookie &&
            setCookie('cart', cartCookie, { maxAge: 36000, sameSite: 'lax' })

        let price = 0
        if (cartCookie) {
            for (const item of cartCookie) {
                price += item.LastBuyPrice * item.quantity
            }
            setTotalPrice(price)
        }

    }, [cartCookie])

    const itemNumberReducer = (itemnumber, action) => {
        switch (action.type) {
            case "INCREAMENT":
                if (itemnumber + 1 > action.product.Few) {
                    alert.warning(`   از این محصول تنها  ${action.product.Few} موجود می باشد `, 4)
                    return itemnumber
                }
                return itemnumber += 1
            case "DECREAMENT":
                if (itemnumber < 2) {
                    alert.warning('تعداد نمی تواند کمتر از یک باشد')
                    return itemnumber
                }
                return itemnumber -= 1
            default:
                return itemnumber
        }

    }

    const floatItemNumberReducer = (floatitemNumber, action) => {
        switch (action.type) {
            case "INCREAMENT":
                if (floatitemNumber + .25 > action.product.Few) {
                    alert.warning(`   از این محصول تنها  ${action.product.Few} کیلو موجود می باشد `, 4)
                    return floatitemNumber
                }
                return floatitemNumber += .25
            case "DECREAMENT":
                if (floatitemNumber < .5) {
                    alert.warning('تعداد نمی تواند کمتر از دویست و پنجاه باشد')
                    return floatitemNumber
                }
                return floatitemNumber -= .25
            default:
                return floatitemNumber
        }

    }

    const [itemnumber, ItemDispatch] = useReducer(itemNumberReducer, 1)
    const [floatitemNumber, floatItemDispatch] = useReducer(floatItemNumberReducer, .25)




    return (
        <CartContext.Provider value={{
            total,
            addItemToCart,
            cartCookie,
            setCartCookie,
            totalPrice,
            removeCookie,
            goRemoveCart,
            itemnumber,
            ItemDispatch,
            floatitemNumber,
            floatItemDispatch,
            showCartButton,
            setShowCartButton,
            handleAddToCart
        }}>

            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;