import React from 'react';
import Image from 'next/image'

const BigSliderItem = ({slide}) => {
    return (
        <div className="w-full">
            <Image src={slide.Image} width={400} height={300} />
        </div>
    )
};

export default BigSliderItem;