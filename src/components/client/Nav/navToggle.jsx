import React from 'react'

export default function NavToggle({ handleShowNavbar, showNavbar }) {

    const icons = {
        open: <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 20 20">
            <title>منو</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>,
        close: <svg className='fill-current text-gray-900' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="20"
            height="20" viewBox="0 0 256 256" xmlSpace="preserve">
            <desc>Created with Fabric.js 1.7.22</desc>
            <defs>
            </defs>
            <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                    <path d="M 6 90 c -1.536 0 -3.071 -0.586 -4.243 -1.758 c -2.343 -2.343 -2.343 -6.142 0 -8.484 l 78 -78 c 2.342 -2.343 6.143 -2.343 8.484 0 c 2.344 2.343 2.344 6.142 0 8.485 l -78 78 C 9.071 89.414 7.536 90 6 90 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(0,0,0)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 84 90 c -1.535 0 -3.071 -0.586 -4.242 -1.758 l -78 -78 c -2.343 -2.343 -2.343 -6.142 0 -8.485 c 2.343 -2.343 6.143 -2.343 8.485 0 l 78 78 c 2.344 2.343 2.344 6.142 0 8.484 C 87.071 89.414 85.535 90 84 90 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(0,0,0)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                </g>
            </g>
        </svg >

    }
    return (
        <>

            <label onClick={() => handleShowNavbar()} htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                {showNavbar ? icons.close : icons.open}
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
        </>
    )
}
