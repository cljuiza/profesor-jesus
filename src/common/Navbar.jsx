import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import { InstagramIcon, SuperprofIcon, WhatsappIcon, FacebookIcon, YouTubeIcon } from "../components/Icons"
import { motion } from "framer-motion"
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CumstomLink = ({ href, title, className = "" }) => {
    const { pathname } = useLocation()
    return (
        <Link to={href} className={`${className} relative group hover:text-textNav ${pathname === href && "text-textNav font-semibold"}`} >
            {title}
            <span className={`h-[3px] inline-block w-0 bg-primary absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

const CumstomMobileLink = ({ href, title, className = "", toggle }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(href)
        toggle()
    }
    return (
        <button to={href} className={`${className} relative group hover:text-textNav`} onClick={handleClick}>
            {title}
            <span className={`h-[3px] inline-block w-0 bg-primary absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </button>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState();
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full px-32 md:px-10 py-8 h-[150px] xs:h-[120px] xs:pb-5 bg-white font-medium flex items-center justify-between text-lg relative">
            <div>
                <Logo />
            </div>
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                {isOpen ?
                    <AiOutlineCloseCircle className="text-red-400" size='35px' />
                    :
                    <HiMenu className="text-primary" size='35px' />
                }
            </button>

            <div className="w-full flex justify-end items-center lg:hidden  ">
                <nav className="absolute left-[42%]  translate-x-[-50]">
                    <CumstomLink href="/" title="Home" className={`mr-4 px-2 `} />
                    <CumstomLink href="/about" title="About" className={`mx-4 px-2 `} />
                    <CumstomLink href="/course" title="Course" className={`mx-4 px-2 `} />
                    <CumstomLink href="/contact" title="Contact" className={`ml-4 `} />
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://www.instagram.com/learnprospanish/?igshid=MzRlODBiNWFlZA==" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-7 mr-3"><InstagramIcon /></motion.a>
                    <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="ml-3 mr-3"><SuperprofIcon /></motion.a>
                    <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="ml-3 mr-2 "><FacebookIcon /></motion.a>
                    <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-8 ml-3 mr-3 "><WhatsappIcon /></motion.a>
                    <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-9 ml-3 mr-3 "><YouTubeIcon /></motion.a>
                </nav>
            </div>

            {isOpen ?
                <div className="min-w-[80vw] flex flex-col justify-between z-30 items-center fixed top-32 left-1/2  -translate-x-1/2 -translate-y-1.5 bg-slate-800/50 rounded-lg backdrop-blur-md py-40 ">
                    <nav className="flex items-center flex-col justify-center text-white ">
                        <CumstomMobileLink href="/" title="Home" toggle={handleClick} className={`text-3xl my-5 `} />
                        <CumstomMobileLink href="/about" title="About" toggle={handleClick} className={`text-3xl my-5 `} />
                        <CumstomMobileLink href="/course" title="Course" toggle={handleClick} className={`text-3xl my-5 `} />
                        <CumstomMobileLink href="/contact" title="Contact" toggle={handleClick} className={`text-3xl mt-5 mb-10`} />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap">
                        <motion.a href="https://www.instagram.com/learnprospanish/?igshid=MzRlODBiNWFlZA==" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-7 mr-3"><InstagramIcon /></motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="ml-3 mr-3"><SuperprofIcon /></motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="ml-3 mr-2 "><FacebookIcon /></motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-8 ml-3 mr-3 "><WhatsappIcon /></motion.a>
                        <motion.a href="/" target="_blank" whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-9 ml-3 mr-3 "><YouTubeIcon /></motion.a>
                    </nav>
                </div>
                : null}



        </header>
    )
}

export default Navbar