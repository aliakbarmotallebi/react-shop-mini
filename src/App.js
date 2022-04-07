import React from "react";
import MainLayout from "./components/Layouts/MainLayout";
import Products from "./components/Products/Products";

function App() {
  return (
    <MainLayout>
      <div classNameName="p-5">
        <section className="bg-white py-8">
          <Products/>
        </section>
      </div>
    </MainLayout>
  );
}

export default App;
