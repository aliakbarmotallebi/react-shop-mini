import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import "../assets/styles/main.css"
import Products from "../components/Products/Products";

function App({Component , pageProps }) {
    return (
        <MainLayout>
            <div className="p-5">
                <section className="bg-white py-8">
                    <Component {...pageProps} />
                    {/*<Products/>*/}
                </section>
            </div>
        </MainLayout>
    );
}

export default App;
