import React from "react"

const AcordionCard = ({ title, desc, icon }) => {

    return (
        <div className="text-justify">
            <h1 className="text-xl text-center pb-5 text-gray-600">{title}</h1>
            <div className="w-auto flex justify-center align-middle pb-5">
                {icon}
            </div>
            <p className="text-gray-500">{desc}</p>
        </div>

    )
}

export default AcordionCard