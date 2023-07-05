import React from "react"
import {
    BiHappyBeaming,
} from "react-icons/bi";
const AcordionCard = ({ title, desc }) => {

    return (
        <div className="w-72 text-justify">
            <h1 className="text-xl text-center pb-5 text-gray-600">{title}</h1>
            <div className="w-auto flex justify-center align-middle pb-5">
                <BiHappyBeaming className=" text-primary " size='30px' />
            </div>
            <p className="text-gray-500">{desc}</p>
        </div>

    )
}

export default AcordionCard