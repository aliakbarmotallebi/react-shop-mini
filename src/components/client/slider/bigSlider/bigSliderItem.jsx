import React from 'react';
import Image from 'next/image'

const BigSliderItem = ({slide}) => {
    return (
        <div className="min-w-full rounded-md">
            <Image src={slide.Image} width={800} height={400} />
        </div>
    )
};

export default BigSliderItem;
