import Footer from "../Commons/Footer"
import Header from "../Commons/Header"

import AlertContext from 'src/context/alertContext'
import Alert from "../Alert/alert"



const MainLayout = ({ children }) => {
    return (
        <div className="font-yekan-regular text-gray-600 work-sans leading-normal text-base tracking-normal bg-slate-50">
            <Header />
            <div className="min-h-full w-full">
                {children}
            </div>
            <AlertContext.Consumer>
                {({ alert, alertText }) => (
                    alert ? <Alert message={alertText} type={alert} /> : ''
                )}
            </AlertContext.Consumer>
            <Footer />
        </div>
    );
}

export default MainLayout;
