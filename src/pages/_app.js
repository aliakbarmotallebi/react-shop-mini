import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';
import LoadingBar from "react-top-loading-bar";

import MainLayout from "@components/client/Layouts/MainLayout"
import AuthProvider from "src/providers/authProvider";
import CartProvider from "src/providers/cartProvider";
import SearchProvider from "src/providers/searchProvider";
import AlertProvider from "src/providers/alertProvider";

// imported style file
import "../assets/styles/main.css"

function App({ Component, pageProps }) {
    const loadingRef = useRef(null);
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            try {
                loadingRef.current.continuousStart();
            }
            catch (err) {

            }
        }
        const handleRouteComplete = (url, obj) => {
            try {
                loadingRef.current.complete();
            }
            catch (err) {

            }
        }
        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteComplete)

        return () => {

            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteComplete);

            try {
                loadingRef.current.complete();
            }
            catch (err) {

            }

        }
    }, [])
    return (
        <AlertProvider>
            <SearchProvider>
                <AuthProvider>
                    <CartProvider>
                        <CookiesProvider>
                            <MainLayout>
                                <LoadingBar color='#ff5152' height={4} ref={loadingRef} />
                                <div className="relative w-full">
                                    <section>
                                        <Component {...pageProps} />
                                    </section>
                                </div>
                            </MainLayout>
                        </CookiesProvider>
                    </CartProvider>
                </AuthProvider>
            </SearchProvider>
        </AlertProvider>
    );
}

export default App;
