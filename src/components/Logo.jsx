import React from "react"
import { LogoIcon } from "./Icons"

const Logo = ({ className = " " }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}><LogoIcon /></div>
    )
}

export default Logo