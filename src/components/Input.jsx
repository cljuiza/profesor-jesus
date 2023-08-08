import React from "react";

const Input = ({ placeholder }) => {
    return (
        <div className="relative">
            <input
                type="text"
                className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}
export default Input  