import React from "react";
// Icons
import {

    RiInstagramLine,
    RiFacebookLine,
    RiYoutubeLine, RiWhatsappLine
} from "react-icons/ri";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-footer w-full py-10 px-32 md:px-20 xs:px-10">
            <div className="flex  xs:!flex-col items-center justify-between gap-4 border-b border-gray-500 pb-8">
                {/* Logo */}
                <div className="xs:pb-5">
                    <Link
                        href="#"
                        className="text-2xl font-bold relative p-1 bg-footer text-white"
                    >
                        Prof. Antonioni
                    </Link>
                </div>
                {/* Social media */}
                <nav className="flex items-center gap-3">
                    <Link href="#" className="block p-3 hover:text-primary  hover:bg-secondary text-white bg-primary rounded-full">
                        <RiInstagramLine />
                    </Link>
                    <Link href="#" className="block p-3 hover:text-primary  hover:bg-secondary text-white bg-primary rounded-full">
                        <RiFacebookLine />
                    </Link>
                    <Link href="#" className="block p-3 hover:text-primary  hover:bg-secondary text-white bg-primary rounded-full">
                        <RiWhatsappLine />
                    </Link>
                    <Link href="#" className="block p-3 hover:text-primary  hover:bg-secondary text-white bg-primary rounded-full">
                        <RiYoutubeLine />
                    </Link>
                </nav>
            </div>
            <div className="mt-6">
                <nav className="mt-4 flex md:flex-col items-baseline md:items-center justify-between gap-4">
                    <Link
                        href="#"
                        className="text-gray-300 mt-4 hover:text-white transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-300 mt-4 hover:text-white transition-color"
                    >
                        Events
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-300 mt-4 hover:text-white transition-color"
                    >
                        Terms of use
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-300 mt-4 hover:text-white transition-color"
                    >
                        Privacy policy
                    </Link>
                    <button
                        type="button"
                        className="font-semibold py-2 px-6 bg-primary hover:bg-violet-50 transition-color text-white  hover:text-primary transition-colors rounded-xl xs:mt-6"
                    >
                        Contact Us
                    </button>
                </nav>
            </div>
            <div className="mt-10">
                <p className="text-gray-300 text-center">
                    © chrjui 2023 - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;