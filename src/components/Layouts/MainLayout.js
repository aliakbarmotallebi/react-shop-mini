import { Children } from "react"
import Footer from "../Commons/Footer"
import Header from "../Commons/Header"


const MainLayout = ({children}) =>{
  return (
    <div className="font-ir-yekan bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header/>
      <div className="container min-h-full">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
