import React from "react";
import MainLayout from "@components/client/Layouts/MainLayout"
import "../assets/styles/main.css"

function App({Component, pageProps}) {
    return (
        <MainLayout>
            <div className="p-5">
                <section>
                    <Component {...pageProps} />
                </section>
            </div>
        </MainLayout>
    );
}

export default App;
