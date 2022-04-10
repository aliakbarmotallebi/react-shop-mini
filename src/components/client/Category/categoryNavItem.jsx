import React from 'react';

const CategoryNavItem = ({category}) => {
    return (
        <li className="lg:mx-2 hidden lg:block">
            <a className="block p-1 w-full text-gray-600  lg:py-3"
               href="#">{category.Name}</a>
        </li>
    )
};

export default CategoryNavItem;