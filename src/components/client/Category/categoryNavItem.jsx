import React from 'react';

const CategoryNavItem = ({category}) => {
    return (
        <li className="lg:mx-2 hidden lg:block">
            <a className="text-gray-600 text-sm py-3 px-1 block font-yekan-bold"
               href="#">{category.Name}</a>
        </li>
    )
};

export default CategoryNavItem;
