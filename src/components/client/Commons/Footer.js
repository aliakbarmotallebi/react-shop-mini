import { memo } from "react";
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="bg-white py-8 px-3 border-t border-gray-100">
            <div className="container">
                <div className="w-full pb-3 border-b-[1px]">
                    <div className="w-3/5 m-auto flex gap-2 justify-between ">
                        <div>
                            <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 126 120">
                                <g fill="none" fill-rule="evenodd">
                                    <path fill="#F05562" fill-rule="nonzero" d="M35.476 117.433H13.02a4.678 4.678 0 0 1-4.678-4.678v-38.13a4.679 4.679 0 0 1 4.678-4.68h22.457a4.678 4.678 0 0 1 4.679 4.68v38.13a4.679 4.679 0 0 1-4.679 4.678z" />
                                    <path fill="#FFF" fill-rule="nonzero" d="M110.14 83.748h-7.322a5.614 5.614 0 1 0 0-11.229H62.247l1.956-2.505V58.206l-11.387 4.192-12.661 12.694v34.388l6.451 5.626a9.448 9.448 0 0 0 6.21 2.327h44.213c3.147 0 5.799-2.575 5.74-5.722a5.614 5.614 0 0 0-5.614-5.506h7.854c3.148 0 5.8-2.576 5.74-5.723a5.614 5.614 0 0 0-5.614-5.505h5.005a5.614 5.614 0 0 0 0-11.23z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M24.248 105.737c-.615 0-1.219.25-1.654.685a2.357 2.357 0 0 0-.686 1.654c0 .616.25 1.22.686 1.654a2.357 2.357 0 0 0 1.654.686c.615 0 1.219-.25 1.653-.686a2.356 2.356 0 0 0 .686-1.654c0-.615-.25-1.219-.686-1.654a2.355 2.355 0 0 0-1.653-.685zM114.184 45.108c-.615 0-1.219.25-1.654.686a2.358 2.358 0 0 0-.685 1.654c0 .615.25 1.219.685 1.653a2.357 2.357 0 0 0 1.654.686c.617 0 1.219-.25 1.654-.686a2.35 2.35 0 0 0 .687-1.653 2.35 2.35 0 0 0-.687-1.654 2.352 2.352 0 0 0-1.654-.686z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M125.088 27.686a2.34 2.34 0 0 0-1.655-.685l-57.546.003a2.34 2.34 0 0 0-2.34 2.34v25.965a67.055 67.055 0 0 0-9.353 4.108c-2.939 1.57-4.657 2.985-5.495 3.822l-7.43 7.43a7.015 7.015 0 0 0-5.793-3.063H13.02a7.026 7.026 0 0 0-7.017 7.018v38.13a7.026 7.026 0 0 0 7.017 7.019h22.458c3.287 0 6.053-2.273 6.81-5.33l2.782 2.426a11.786 11.786 0 0 0 7.748 2.904h70.617a2.34 2.34 0 0 0 2.339-2.34V29.34c0-.62-.247-1.215-.685-1.654zm-89.612 87.408H13.02c-1.29 0-2.34-1.05-2.34-2.34v-38.13c0-1.29 1.05-2.339 2.34-2.339h8.89v26.948a2.34 2.34 0 0 0 4.678 0V72.285h8.89c1.29 0 2.339 1.05 2.339 2.34v38.13c0 1.29-1.05 2.34-2.34 2.34zm12.668-1.75l-5.65-4.928V76.061l7.576-7.687c2.146-1.858 3.941-3.194 5.386-4.01 3.045-1.717 5.74-2.913 8.085-3.588v6.289l-2.266 6.03a2.34 2.34 0 0 0 2.266 1.76l39.277.003a3.279 3.279 0 0 1 3.276 3.275 3.279 3.279 0 0 1-3.276 3.275H79.252a2.34 2.34 0 0 0 0 4.679h30.889a3.279 3.279 0 0 1 3.275 3.275 3.279 3.279 0 0 1-3.275 3.275H79.25a2.34 2.34 0 0 0 0 4.679h25.884a3.279 3.279 0 0 1 3.275 3.275 3.279 3.279 0 0 1-3.275 3.275H79.252a2.34 2.34 0 0 0 0 4.679h17.904a3.279 3.279 0 0 1 3.275 3.275 3.279 3.279 0 0 1-3.275 3.275h-44.34a7.113 7.113 0 0 1-4.672-1.752zm56.257 1.75c.453-1 .708-2.108.708-3.275a7.905 7.905 0 0 0-.708-3.275h.734c4.386 0 7.954-3.568 7.954-7.954 0-1.279-.306-2.488-.845-3.56 3.368-.924 5.85-4.011 5.85-7.668a7.91 7.91 0 0 0-1.57-4.739V54.974a2.34 2.34 0 0 0-4.679 0v26.62a7.956 7.956 0 0 0-1.705-.186c.377-1 .632-2.108.632-3.275 0-4.385-3.568-7.953-7.954-7.953H68.227V32.676l52.867-.002v82.42h-16.693z" />
                                    <path fill="#434A54" d="M76.005 32h13.001v39H76.005z" />
                                    <path fill="#55C6D9" fill-rule="nonzero" d="M26.404 63.276a2.5 2.5 0 0 1-3.808 0C7.889 45.982.5 33.213.5 24.5c0-13.255 10.745-24 24-24s24 10.745 24 24c0 8.713-7.389 21.482-22.096 38.776zM43.5 24.5c0-10.493-8.507-19-19-19s-19 8.507-19 19c0 6.788 6.313 18.014 19 33.272 12.687-15.258 19-26.484 19-33.272z" />
                                    <path fill="#55C6D9" fill-rule="nonzero" d="M24.5 36.25c-6.49 0-11.75-5.26-11.75-11.75s5.26-11.75 11.75-11.75 11.75 5.26 11.75 11.75-5.26 11.75-11.75 11.75zm0-4.5a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5z" />
                                </g>
                            </svg>
                            <span className="font-yekan-bold block text-center py-2">پرداخت در محل</span>
                        </div>
                        <div>
                            <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 158 106">
                                <g fill="none" fill-rule="evenodd">
                                    <path fill="#F05562" d="M86.751 13l47.734 14.917v23.36l-15.793 5.141V34.216L69 18.375z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M89.024 12.944l48.042 15.35a2.5 2.5 0 0 1 1.739 2.38v20.271a2.5 2.5 0 0 1-1.668 2.358l-4.695 1.658a2.5 2.5 0 0 1-1.665-4.715l3.028-1.07V32.502l-53.5-17.094c-2.293-.733-2.327-3.967-.048-4.747l17.6-6.025a2.5 2.5 0 0 1 1.562-.02l56 17.671a2.5 2.5 0 0 1 1.748 2.385v60.964a2.5 2.5 0 0 1-1.746 2.383l-56 17.715a2.5 2.5 0 0 1-1.517-.003L42.603 88.016a2.5 2.5 0 0 1-1.738-2.381v-8.252a2.5 2.5 0 1 1 5 0v6.427l52.807 16.916 53.495-16.922v-57.3L98.699 9.631l-9.675 3.312z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M153.913 22.616a2.5 2.5 0 1 1 1.508 4.768l-56 17.714a2.5 2.5 0 0 1-1.512 0L55.173 31.505a2.5 2.5 0 0 1 1.516-4.764l41.98 13.35 55.244-17.476z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M123.62 52.464a2.5 2.5 0 0 1 1.567 4.748l-6.165 2.036a2.5 2.5 0 0 1-3.284-2.374V38.429L62.24 21.335c-2.306-.736-2.323-3.993-.025-4.754l21.001-6.954a2.5 2.5 0 1 1 1.572 4.746L71.08 18.912 119 34.222a2.5 2.5 0 0 1 1.74 2.382v16.812l2.88-.952z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M45.851 26.94v12.047a2.5 2.5 0 1 1-5 0V25.105a2.5 2.5 0 0 1 1.751-2.385l19.863-6.237a2.5 2.5 0 1 1 1.498 4.77L45.851 26.94z" />
                                    <path fill="#55C6D9" fill-rule="nonzero" d="M66.965 44.5a2.5 2.5 0 1 1 0 5H22a2.5 2.5 0 1 1 0-5h44.965zM41.965 55.5a2.5 2.5 0 1 1 0 5H3a2.5 2.5 0 1 1 0-5h38.965z" />
                                    <circle cx="14.5" cy="47" r="2.5" fill="#55C6D9" />
                                    <circle cx="21.5" cy="69" r="2.5" fill="#55C6D9" />
                                    <path fill="#55C6D9" fill-rule="nonzero" d="M53.965 66.5a2.5 2.5 0 1 1 0 5H29a2.5 2.5 0 1 1 0-5h24.965zM78.965.5a2.5 2.5 0 1 1 0 5H40a2.5 2.5 0 1 1 0-5h38.965zM39.965 12.5a2.5 2.5 0 1 1 0 5H21a2.5 2.5 0 1 1 0-5h18.965z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M101.5 103.125a2.5 2.5 0 1 1-5 0V90.76a2.5 2.5 0 1 1 5 0v12.365zM101.5 80.714a2.5 2.5 0 1 1-5 0V45a2.5 2.5 0 1 1 5 0v35.714z" />
                                </g>
                            </svg>
                            <span className="font-yekan-bold block text-center py-2">تحویل سریع</span>
                            <span className="text-xs text-gray-500">(ارسال برای فاکتور بالای ۵۰۰۰۰ تومان رایگان)</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 101 120">
                                <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                                    <path fill="#434A54" fill-rule="nonzero" stroke="#434A54" d="M92.444 52.814c1.786-2.2 2.431-3.223 2.431-3.813 0-.591-.645-1.614-2.431-3.814l-.225-.277c-2.131-2.632-3.122-4.174-3.687-6.267-.424-1.572-.486-3.202-.29-5.156.073-.734.158-1.35.343-2.553.425-2.778.47-3.965.22-4.394-.256-.437-1.317-1.009-3.646-1.908l-.297-.115c-3.584-1.38-5.158-2.173-6.795-3.794-1.638-1.621-2.438-3.179-3.833-6.727l-.116-.295c-.908-2.305-1.486-3.355-1.928-3.608-.398-.228-1.582-.206-3.904.138l-.376.056c-1.369.205-1.988.29-2.727.362-1.979.194-3.628.134-5.218-.287-2.197-.58-3.654-1.52-6.612-3.872-2.223-1.768-3.256-2.407-3.853-2.407-.478 0-1.424.516-2.918 1.67-.22.17-.44.343-.765.602-3.127 2.487-4.584 3.426-6.78 4.007-2.264.598-4.047.51-7.874-.065-2.72-.409-3.919-.453-4.352-.205-.466.267-1.031 1.325-2.044 3.903-1.393 3.547-2.195 5.105-3.832 6.726-1.507 1.492-3.195 2.392-6.082 3.518-.2.078-.358.14-.714.276l-.298.115c-2.329.9-3.389 1.472-3.644 1.908-.23.395-.209 1.568.139 3.868l.056.372c.207 1.353.293 1.966.366 2.697.196 1.96.135 3.592-.29 5.166-.587 2.175-1.536 3.617-3.912 6.544-.396.49-.57.706-.74.922C4.646 47.588 4.124 48.526 4.124 49c0 .473.52 1.41 1.684 2.885.173.218.348.437.611.761 2.512 3.094 3.46 4.537 4.048 6.712.425 1.572.486 3.203.29 5.159-.073.733-.159 1.348-.343 2.55-.425 2.777-.47 3.964-.22 4.393.256.437 1.317 1.01 3.646 1.909l.297.114c3.584 1.38 5.158 2.173 6.796 3.794 1.637 1.621 2.438 3.179 3.832 6.727l.116.295c.908 2.306 1.486 3.355 1.928 3.608.398.228 1.583.206 3.906-.138l.376-.056c1.372-.206 1.993-.29 2.734-.363.699-.068 1.346-.104 1.973-.104 1.15 0 2.215.121 3.237.392 2.197.58 3.653 1.52 6.611 3.872 2.223 1.768 3.256 2.407 3.853 2.407.597 0 1.63-.639 3.853-2.407l.28-.222c2.658-2.11 4.215-3.09 6.33-3.65 2.264-.599 4.045-.51 7.874.065 2.72.408 3.92.452 4.352.204.466-.267 1.031-1.325 2.044-3.902 1.393-3.547 2.195-5.106 3.833-6.727 1.637-1.62 3.21-2.414 6.795-3.794l.298-.115c2.33-.899 3.39-1.471 3.644-1.908.231-.394.21-1.567-.138-3.867l-.057-.372c-.59-3.86-.681-5.623-.076-7.864.587-2.174 1.536-3.616 3.912-6.544zm.073 7.599c-.407 1.507-.336 2.898.159 6.128.04.258.04.258.068.45.507 3.353.537 4.963-.37 6.515-.937 1.603-2.364 2.373-5.715 3.668l-.303.116c-3.045 1.172-4.284 1.797-5.374 2.876-1.09 1.079-1.72 2.306-2.905 5.32-1.443 3.674-2.15 4.998-3.822 5.956-1.642.94-3.124.885-7.036.298-3.263-.49-4.668-.56-6.19-.157-1.387.367-2.59 1.125-4.816 2.89l-.277.22C52.803 97.186 51.486 98 49.5 98c-1.985 0-3.303-.815-6.436-3.307-2.504-1.991-3.648-2.728-5.094-3.11-.65-.173-1.362-.254-2.171-.254-.481 0-.995.029-1.567.085-.648.063-1.219.141-2.363.313l-.543.08c-3.388.502-5.014.532-6.582-.366-1.62-.927-2.397-2.34-3.705-5.657l-.118-.3c-1.184-3.014-1.814-4.24-2.904-5.32-1.09-1.078-2.33-1.703-5.375-2.875l-.3-.116c-3.352-1.295-4.78-2.065-5.717-3.668-.95-1.625-.894-3.092-.301-6.965.187-1.219.265-1.784.33-2.425.15-1.508.106-2.675-.171-3.703-.386-1.43-1.131-2.563-3.143-5.041-.41-.506-.596-.737-.782-.974C.827 52.202 0 50.717 0 49c0-1.718.828-3.204 2.564-5.405.184-.234.368-.463.639-.797 2.15-2.648 2.894-3.78 3.28-5.211.278-1.029.321-2.198.17-3.709-.064-.64-.142-1.203-.315-2.334l-.082-.535c-.507-3.354-.537-4.963.37-6.516.937-1.602 2.364-2.373 5.716-3.667l.302-.116.696-.27c2.393-.933 3.683-1.62 4.678-2.606 1.09-1.08 1.72-2.306 2.905-5.32 1.444-3.674 2.15-4.999 3.823-5.956 1.641-.94 3.124-.886 7.035-.298 3.261.489 4.668.56 6.19.157 1.446-.383 2.59-1.12 5.093-3.111.51-.405.742-.588.98-.771C46.264.819 47.765 0 49.5 0c1.986 0 3.304.815 6.437 3.307 2.504 1.991 3.647 2.728 5.093 3.11 1.039.275 2.22.318 3.746.168.646-.063 1.216-.14 2.358-.312l.542-.08c3.387-.502 5.012-.532 6.58.366 1.62.928 2.398 2.34 3.705 5.658l.118.299c1.184 3.014 1.815 4.24 2.905 5.32 1.09 1.079 2.329 1.703 5.374 2.876l.3.116c3.352 1.294 4.78 2.064 5.717 3.668.95 1.624.894 3.091.301 6.965-.187 1.22-.265 1.786-.33 2.428-.15 1.506-.106 2.673.171 3.7.37 1.372 1.136 2.564 2.92 4.767l.222.273C98.176 45.73 99 47.035 99 49c0 1.965-.823 3.271-3.34 6.372-2.012 2.478-2.756 3.61-3.143 5.041z" />
                                    <ellipse cx="50.5" cy="50" fill="#F05562" rx="31.5" ry="31" />
                                    <path fill="#FFF" fill-rule="nonzero" d="M66.049 32.12a2.751 2.751 0 0 1 3.823-.602 2.7 2.7 0 0 1 .605 3.792L46.62 67.88a2.751 2.751 0 0 1-3.916.532L30.036 58.44a2.7 2.7 0 0 1-.443-3.813 2.752 2.752 0 0 1 3.845-.44L43.87 62.4l22.179-30.28z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M50.5 17c1.142 0 2.068.912 2.068 2.037s-.926 2.037-2.068 2.037c-16.217 0-29.364 12.95-29.364 28.926 0 15.975 13.147 28.926 29.364 28.926S79.864 65.976 79.864 50c0-1.125.926-2.037 2.068-2.037S84 48.875 84 50c0 18.225-14.998 33-33.5 33C31.998 83 17 68.225 17 50s14.998-33 33.5-33z" />
                                    <path fill="#55C6D9" fill-rule="nonzero" d="M74.46 96.206c0-1.218 1.016-2.206 2.27-2.206s2.27.988 2.27 2.206v20.587c0 1.42-1.36 2.47-2.784 2.149l-25.517-5.767-25.922 5.768c-1.422.317-2.777-.733-2.777-2.15v-13.725c0-1.218 1.016-2.206 2.27-2.206s2.27.988 2.27 2.206v10.957l23.656-5.264a2.334 2.334 0 0 1 1.021.002l23.243 5.253v-17.81zM24.5 94c-.657 0-1.302.267-1.767.733a2.52 2.52 0 0 0-.733 1.77c0 .654.267 1.3.733 1.767.465.465 1.11.73 1.767.73.657 0 1.302-.265 1.767-.73.466-.468.733-1.11.733-1.767a2.52 2.52 0 0 0-.733-1.77A2.519 2.519 0 0 0 24.5 94z" />
                                    <path fill="#434A54" fill-rule="nonzero" d="M58.5 17c-.657 0-1.303.267-1.767.733a2.52 2.52 0 0 0-.733 1.77c0 .654.267 1.3.733 1.767.465.465 1.11.73 1.767.73.657 0 1.303-.265 1.767-.73.465-.468.733-1.11.733-1.767a2.52 2.52 0 0 0-.733-1.77A2.519 2.519 0 0 0 58.5 17z" />
                                </g>
                            </svg>
                            <span className="font-yekan-bold block text-center py-2">ضمانت کالا</span>
                        </div>
                    </div>
                </div>

                <div className=" py-2 flex w-full items-center">
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
