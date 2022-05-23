import React from "react";
import MainLayout from "@components/client/Layouts/MainLayout"
import "../assets/styles/main.css"
import AuthProvider from "src/providers/authProvider";
import CartProvider from "src/providers/cartProvider";
import Search from "@components/client/Nav/search/search";
import SearchProvider from "src/providers/searchProvider";

function App({ Component, pageProps }) {
    return (
        <SearchProvider>
            <AuthProvider>
                <CartProvider>
                    <MainLayout>
                        <div className="p-5 relative w-full">
                            <section>
                                <Component {...pageProps} />
                            </section>
                        </div>
                    </MainLayout>
                </CartProvider>
            </AuthProvider>
        </SearchProvider>
    );
}

export default App;
