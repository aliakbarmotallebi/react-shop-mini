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

        <div className="shadow-lg lg:shadow-none nav-pills relative mb-10 bg-gray-100">
            <ul className="flex-col lg:flex lg:flex-row lg:items-center lg:-mx-2">
                {categories.map((category) => (
                    <CategoryNavItem category={category}/>
                ))}
            </ul>
        </div>

    )
}
export default CategoryNav