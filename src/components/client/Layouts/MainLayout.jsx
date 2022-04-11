import Footer from "../Commons/Footer"
import Header from "../Commons/Header"


const MainLayout = ({children}) => {
    return (
        <div className="font-yekan-regular text-gray-600 work-sans leading-normal text-base tracking-normal bg-gray-100">
            <Header/>
            <div className="container min-h-full">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;
