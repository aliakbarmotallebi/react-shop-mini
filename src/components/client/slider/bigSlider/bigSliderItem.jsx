import React from 'react';
import Image from 'next/image'

const BigSliderItem = ({slide}) => {
    return (
        <div className="w-full rounded-md">
            <Image src={slide.Image} width={800} height={400} layout={'responsive'} />
        </div>
    )
};

export default BigSliderItem;
