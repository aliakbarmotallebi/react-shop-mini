import React from "react";
import MainLayout from "@components/client/Layouts/MainLayout"
import "../assets/styles/main.css"
import AuthProvider from "src/providers/authProvider";
import CartProvider from "src/providers/cartProvider";
import Search from "@components/client/Nav/search/search";
import SearchProvider from "src/providers/searchProvider";
import AlertProvider from "src/providers/alertProvider";

function App({ Component, pageProps }) {
    return (
        <AlertProvider>
            <SearchProvider>
                <AuthProvider>
                    <CartProvider>
                        <MainLayout>
                            <div className="md:p-5 p-1 relative w-full">
                                <section>
                                    <Component {...pageProps} />
                                </section>
                            </div>
                        </MainLayout>
                    </CartProvider>
                </AuthProvider>
            </SearchProvider>
        </AlertProvider>
    );
}

export default App;
