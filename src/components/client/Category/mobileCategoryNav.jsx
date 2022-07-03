import { AxiosInstance } from '@utils/http';
import React, { useEffect, useState } from 'react'
import CategoryLinker from '../Commons/categoryLinker';
import Loading from '../Commons/loading';

export default function MobileCategoryNav({ handleShowNavbar }) {
    const [subCategories, setSubcategoris] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchSubCategories = () => {
        setIsLoading(true);
        AxiosInstance.get(`https://shopjozi.ir/api/subcategories`)
            .then((res) => {
                setSubcategoris(res.data['data']);
                setIsLoading(false)
            }).catch((err) => console.log(err));
    }

    const subCategoryHandle = () => {
        if (subCategories.length <= 0) {
            fetchSubCategories();
        } else {
            setSubcategoris([])
        }

    }
    return (
        <>
            <span onClick={() => subCategoryHandle()} className="cursor-pointer  inline-block no-underline hover:text-black hover:underline text-sm" >  دسته بندی  •</span>

            {!isLoading ? <ul>
                {subCategories.map((subCategory, key) => (
                    <li onClick={() => handleShowNavbar()}>
                        <CategoryLinker key={key} categoryId={subCategory.ErpCode} categorySlug={subCategory.Name} style={'text-xs text-slate-500'} >
                            {subCategory.Name}
                        </CategoryLinker>
                    </li>
                ))}
            </ul> : <Loading padding='py-10' />
            }

        </>
    )
}
