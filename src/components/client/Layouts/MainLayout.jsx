import { useEffect, useState, useContext } from "react"
import Footer from "../Commons/Footer"
import Header from "../Commons/Header"
import AlertContext from 'src/context/alertContext'
import Alert from "../Alert/alert"
import ModalProduct from "../Commons/modalProduct"
import MainContext from "src/context/mainContext"


const MainLayout = ({ children }) => {
    const [showAndroidVersion, setShowAndroidVersion] = useState(true)
    const { modalProduct } = useContext(MainContext)

    useEffect(() => {
        localStorage.getItem('doNotShowAgainAndriodVersion') &&
            setShowAndroidVersion(false)

    }, [showAndroidVersion])

    const hadleDownloadAndoirdVersion = () => {
        setShowAndroidVersion(false)
        localStorage.setItem('doNotShowAgainAndriodVersion', true)
    }

    return (
        <div className="font-yekan-regular text-gray-600 work-sans leading-normal text-base tracking-normal  ">
            <Header />
            <ModalProduct product={modalProduct?.product} />
            <div className="min-h-full w-full">
                {children}
            </div>

            <AlertContext.Consumer>
                {({ alert, alertText }) => (
                    alert ? <Alert message={alertText} type={alert} /> : ''
                )}
            </AlertContext.Consumer>
            {showAndroidVersion && <div className="fixed left-0 right-0 bottom-0 py-3  px-3 ">
                <div className=" bg-slate-50 border-[1px] border-slate-200 rounded-sm  w-full p-5 flex justify-between md:text-sm text-xs">
                    <p className="font-yekan-bold text-slate-900">اپلیکیشن اندروید شهروند را از
                        <a href="https://cafebazaar.ir/app/ir.shopjozi.shahrvandmohajer" target={"_blank"} className="text-blue-600 px-1">
                            اینجا
                        </a>
                        دانلود کنید
                    </p>
                    <span className="text-rose-600 cursor-pointer" onClick={() => hadleDownloadAndoirdVersion()}>
                        عدم نمایش
                    </span>
                </div>
            </div>}

            <Footer />
        </div>
    );
}

export default MainLayout;
