import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import CategoryNav from "@components/client/Category/categoryNav";
import AuthContext from "src/context/authContext";
import CartContext from "src/context/cartContext";
import Search from "./search/search";
import useMediaQuery from "@components/customHooks/useMediaQuery";
import MobileCategoryNav from "../Category/mobileCategoryNav";
import NavToggle from "./navToggle";

const MainNav = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false)
    const { logoutuser, storageUser } = useContext(AuthContext)

    const isMobile = useMediaQuery()

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    const handleShowNavbar = () => {
        if (!isMobile) return
        setShowNavbar(!showNavbar)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);



    return (

        <nav id="header" className={`w-full z-30 bg-white sticky  ${visible ? 'top-0' : '-top-80'} transition-all ease-in-out duration-300`}>

            <div className="container">

                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 md:px-6 px-1 py-3">
                    <NavToggle handleShowNavbar={handleShowNavbar} />

                    <div className={`${showNavbar ? '' : 'hidden'}  fixed overflow-auto z-50 md:relative top-0 right-0 w-72 h-full z-50 shadow-lg md:shadow-none bg-white md:flex md:items-center md:w-auto w-full order-3 md:order-1 `} id="menu">
                        <div className="py-7 px-3 container  md:hidden">
                            <NavToggle handleShowNavbar={handleShowNavbar} showNavbar={showNavbar} />
                        </div>
                        <nav>
                            <ul className="md:flex items-center justify-between text-sm text-gray-700 pt-4 md:pt-0">
                                <li onClick={() => handleShowNavbar()}>
                                    <Link href={'/'}>
                                        <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                        >صفحه اصلی</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleShowNavbar()}>
                                    <Link href={'/shop'}>
                                        <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                        >فروشگاه</a>
                                    </Link>
                                </li>

                                {storageUser.user ?
                                    (
                                        <>
                                            <li onClick={() => handleShowNavbar()}>
                                                <Link href={'/login'}>
                                                    <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">{storageUser?.user?.mobile}</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={logoutuser} className="inline-block no-underline hover:text-black hover:underline py-2 px-4">خروج از حساب</button>
                                            </li>
                                        </>
                                    )
                                    : (<li onClick={() => handleShowNavbar()}>
                                        <Link href={'/login'}>
                                            <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">ورود</a>
                                        </Link>
                                    </li>)
                                }

                            </ul>
                        </nav>
                        <div className="px-4">

                            {isMobile && <MobileCategoryNav handleShowNavbar={handleShowNavbar} />}
                        </div>
                    </div>
                    {showNavbar && <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 z-30 opacity-75 " onClick={() => handleShowNavbar()}></div>}


                    <div className="md:basis-1/3 basis-2/3 order-1 md:order-2">
                        <div className="pt-2 relative mx-auto text-gray-600 w-full">
                            <Search />
                        </div>
                    </div>

                    <div className="order-2 md:order-3 flex items-center" id="nav-content">

                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <circle fill="none" cx="12" cy="7" r="3" />
                                <path
                                    d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                            </svg>

                        </a>

                        <Link href={"/cart"}>

                            <a className="inline-block no-underline hover:text-black relative">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                                    <circle cx="10.5" cy="18.5" r="1.5" />
                                    <circle cx="17.5" cy="18.5" r="1.5" />
                                </svg>
                                <CartContext.Consumer>
                                    {({ total }) => (
                                        <>
                                            {total > 0 && (<span className="w-4 h-4 bg-rose-400 text-white text-center absolute -top-2 -right-2 leading-4 rounded-full animate-ping"></span>)}
                                            <span className="w-4 h-4 bg-rose-400 text-white text-center absolute -top-2 -right-2 leading-4 rounded-full">{total}</span>
                                        </>
                                    )}
                                </CartContext.Consumer>
                            </a>
                        </Link>

                    </div>
                </div>

                {!isMobile && <CategoryNav />}
            </div>

        </nav>

    )
}

export default MainNav;