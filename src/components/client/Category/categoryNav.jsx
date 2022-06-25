import React, { useEffect, useState } from "react";
import Config from "@utils/Config";
import { AxiosInstance } from "@utils/http";

const CategoryNav = () => {
    const [categories, setCategories] = useState([])
    const [subcategories, setSubcategoris] = useState([])
    const fetchCategories = () => {
        const { mainCategory } = Config.services.mainCategory
        AxiosInstance.get(`${mainCategory}`)
            .then((res) => {
                setCategories(res.data['data']);
            }).catch((err) => console.log(err));
    }

    const fetchSubCategories = (categoryErpCode) => {
        AxiosInstance.get(`https://shopjozi.ir/api/subcategories/category/${categoryErpCode}`)
            .then((res) => {
                setSubcategoris(res.data['data']);
            }).catch((err) => console.log(err));
    }
    const mouseLeaveHandle = () => {
        setSubcategoris([])
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="shadow-lg lg:shadow-none " onMouseLeave={() => mouseLeaveHandle()}>
            <ul className="flex-col lg:flex lg:flex-row lg:items-center">
                {categories.map((category, key) => (
                    <li key={key} onClick={() => fetchSubCategories(category.ErpCode)} className="lg:mx-2 hidden lg:block cursor-pointer ">
                        <span className="text-gray-600 text-xs py-3 px-1 block font-yekan-bold categoryList-item">
                            {category.Name}
                        </span>
                    </li>
                ))}
            </ul>
            <div className=" relative ">
                <ul className="absolute top-0 left-0 right-0 bg-slate-100 columns-3">
                    {subcategories.map((subCategory, key) => (
                        <li key={key} className="lg:mx-2 lg:block">
                            <a className="text-gray-600 text-xs py-3 px-1 block font-yekan-bold hover:bg-white rounded-md"
                                href="#">{subCategory.Name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
export default CategoryNav
