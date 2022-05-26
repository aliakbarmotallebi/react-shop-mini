import React from "react";

const Loading = ({ padding }) => {

    return (
        <div className={`grid h-full place-content-center ${padding}`}>
            <div>
                <div className="snippet" data-title=".dot-flashing">
                    <div className="stage">
                        <div className="dot-flashing"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Loading