import React, {useEffect, useState} from "react";
import Config from "@utils/Config";
import {AxiosInstance} from "@utils/http";
import CategoryNavItem from "@components/client/Category/categoryNavItem";

const CategoryNav = () => {
    const [categories, setCategories] = useState([])
    const fetchCategories = () => {
        const {mainCategory} = Config.services.mainCategory
        AxiosInstance.get(`${mainCategory}`)
            .then((res) => {
                setCategories(res.data['data']);
            }).catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="shadow-lg lg:shadow-none border-y">
            <ul className="flex-col lg:flex lg:flex-row lg:items-center">
                {categories.map((category) => (
                    <CategoryNavItem category={category}/>
                ))}
            </ul>
        </div>
    )
}
export default CategoryNav
