import {memo} from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-8 px-3 border-t border-gray-100">
            <div className="container mx-auto">
            <div className="flex w-full items-center">
                <div className="px-3 md:px-0  lg:w-1/2">
                    <h3 className="font-bold text-gray-900 font-yekan-bold">
                        درباره ما
                    </h3>
                    <p className="py-4 text-sm leading-7 font-yekan-light">
                        جهت تسریع و تسهیل فرایند خرید اینترنتی و خدمت‌رسانی به همشهریان عزیز شهر بیش از ۵۰۰۰
                        کالای متنوع در دسته‌بند‌ی‌های گوناگون نظیر لبنیات، خواربار، میوه و سبزیجات تازه، نان،
                        مواد پروتئینی، لوازم بهداشتی و آرایشی ... را به صورت آنلاین عرضه می‌کند
                    </p>
                </div>
                <div className="flex flex-row mx-auto justify-self-end">
                    <div>
                        <a href="http://">
                            <img  src="/assets/images/1.png" alt="" className="max-w-[90px]"/>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img  src="/assets/images/2.png" className="max-w-[90px]"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-xl p-5 font-semibold tracking-tighter">
                    <span>
                        سوالی دارید؟ تماس بگیرید
                    </span>
                    <span className="ltr text-xl pr-5">
                        3001 3862 086
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="instagram-wrapper">
                        <a href="https://instagram.com/sss" className="text-xs bg-[#e8e8e8] p-1 rounded-lg flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block text-black w-4 h-4"
                            >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        <span className="inline-block text-black mr-2 text-xs">
                        ما را در اینستاگرام دنبال کنید
                        </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex px-3 py-2 border-t border-gray-200">
                <div className="w-full mx-auto flex flex-wrap">

                    <div className="flex w-full lg:w-1/2 lg:justify-start lg:text-right">
                        <div className="px-3 md:px-0">
                            
                            <div className="pt-[10px] text-xs font-yekan-light">
                            شهرمهاجران، خیابان ملاصدرا، بازارچه شرقی، پاساژ تبارک، طبقه اول، فروشگاه شهروند مهاجر
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}

export default memo(Footer);
