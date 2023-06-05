import React from "react"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import {InstagramIcon, SuperprofIcon, WhatsappIcon, FacebookIcon} from "../components/Icons"
import {motion} from "framer-motion"
const CumstomLink =({href,title,className=""})=>{
     return (
        <Link href={href} className={`${className}`}>
            {title}
            <span></span>
         </Link>
    )
}
const Navbar = () => {
    return (
        <div className="w-full px-32 py-8 h-[150px] bg-white font-medium flex items-center justify-between">
             <div>
                <Logo/> 
            </div>
            <nav className="absolute left-[42%]  translate-x-[-50] ">
                <CumstomLink href="/" title="Home" className="mr-4 pr-4" />
                <CumstomLink href="/about" title="About" className="mx-4 pr-4"/>
                <CumstomLink href="/course"  title="Course" className="mx-4 pr-4"/>
                <CumstomLink href="/contact"  title="Contact" className="ml-4"/>
            </nav>
        
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.instagram.com/learnprospanish/?igshid=MzRlODBiNWFlZA==" target="_blank" whileHover={{y: -3}} whileTap={{scale:0.9}} className="w-6 mr-3"><InstagramIcon/></motion.a>
                <motion.a href="/" target="_blank" whileHover={{y: -3}} whileTap={{scale:0.9}} className="ml-3 mr-3"><SuperprofIcon/></motion.a>
                <motion.a href="/" target="_blank" whileHover={{y: -3}} whileTap={{scale:0.9}} className="ml-3 mr-2 "><FacebookIcon/></motion.a>  
                <motion.a href="/" target="_blank" whileHover={{y: -3}} whileTap={{scale:0.9}} className="w-7 ml-3 mr-3 "><WhatsappIcon/></motion.a>
            </nav>
           
        </div>
    )
}

export default Navbar