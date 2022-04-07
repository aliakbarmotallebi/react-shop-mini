import React from "react";
import MainLayout from "./components/Layouts/MainLayout";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";

function App() {
  return (
    <MainLayout>
      <div classNameName="p-5">
        <section className="bg-white py-8">
          <Products/>
          {/* <Login/> */}
        </section>
      </div>
    </MainLayout>
  );
}

export default App;
