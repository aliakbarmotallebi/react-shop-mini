import { Children } from "react"
import Footer from "../Common/Footer"
import Header from "../Common/Header"

const MainLayout = ({children}) =>{
  return (
    <div className="font-ir-yekan bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header/>
        {children}
      <Footer/>
    </div>
  );
}

export default MainLayout;
