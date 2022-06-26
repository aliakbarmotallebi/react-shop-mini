import { AxiosInstance } from '@utils/http';
import React, { useEffect, useState } from 'react'

export default function MobileCategoryNav() {
    const [subCategories, setSubcategoris] = useState([])

    const fetchSubCategories = () => {
        AxiosInstance.get(`https://shopjozi.ir/api/subcategories`)
            .then((res) => {
                setSubcategoris(res.data['data']);
            }).catch((err) => console.log(err));
    }
    useEffect(() => {
        fetchSubCategories();
    }, [])

    return (
        <ul>
            {subCategories.map((subCategory) => (
                <li>
                    <a className="text-xs" href=''>
                        {subCategory.Name}
                    </a>
                </li>
            ))}
        </ul>
    )
}
