import { Children } from "react"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({children}) =>{
  return ( <div className="font-peyda-regular bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <Header/>
      {children}
    <Footer/>
  </div>
  );
}

export default Layout;
