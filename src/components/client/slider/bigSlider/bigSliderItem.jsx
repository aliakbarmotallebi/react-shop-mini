import React from 'react';
import Image from 'next/image'

const BigSliderItem = ({ slide }) => {
    const keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    const triplet = (e1, e2, e3) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63)


    const rgbDataURL = (r, g, b) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
    return (
        <div className=" rounded-md">
            <Image
                src={slide.Image}
                alt={slide.Name}
                width={800}
                placeholder='blur'
                blurDataURL={rgbDataURL(241, 245, 249)}
                height={400}
                layout='responsive' />
        </div>
    )
};

export default BigSliderItem;
