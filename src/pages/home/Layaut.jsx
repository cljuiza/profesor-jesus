import React from "react";

const Layaut = ({ className = " ", children }) => {
    return (
        <div className={`w-full h-full inline-block  bg-light p-32 xl:p-24 lg:p-16 
        md:p-20 sm:p-8 !pt-30 md:!pt-0 sm:!pt-0 ${className}`}>{children}</div>
    )
}
export default Layaut  