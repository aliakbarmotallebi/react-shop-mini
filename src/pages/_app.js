import React  from "react";
import MainLayout from "@components/client/Layouts/MainLayout"
import "../assets/styles/main.css"
import AuthProvider from "src/providers/authProvider";

function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <MainLayout>
                <div className="p-5 relative">
                    <section>
                        <Component {...pageProps} />
                    </section>
                </div>
            </MainLayout>
        </AuthProvider>
    );
}

export default App;
