import React from "react";
import Layaut from "./Layaut";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import {
    RiPlayFill,
} from "react-icons/ri";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="flex items-center text-dark w-full">
                <Layaut className="m-15 pt-20">
                    <div className="flex items-center justify-around w-full xl:flex-col">
                        <div className=" w-1/3 lg:w-auto xl:px-3">
                            <img src="/images/teacher2.png" alt="teacher" className="w-50 h-auto" loading="lazy" />
                        </div>
                        <div className="w-1/2 xl:w-auto flex flex-col items-center self-center">
                            <AnimatedText text="Hola, soy Julia Antonioni !" className="!text-8xl !text-left sm:!text-3xl sm:mt-5 lg:!text-center" />
                            <br />
                            <p className="my-3 text-xl pr-3 sm:text-md sm:!text-center text-gray-600">Seré tu profesora de español e ingles, conmigo hablarás estos dos idiomas de manera eficaz, fluída y con seguridad.</p>
                            {/* <p className="!text-left text-xl pt-2 pr-3 font-medium">¿ Qué esperas para empezar ?</p> */}
                            <div className="w-9/12 flex justify-around items-center  md:flex-row xs:flex-col gap-4 mt-6 lg:self-center ">
                                <motion.button onClick={() => navigate("/contact")} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className=" bg-primary hover:bg-violet-50 text-white hover:text-primary py-2 px-6 rounded-xl text-xl border-2 border-solid border-transparent hover:border-primary">
                                    Contactanos
                                </motion.button>
                                <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="flex items-center justify-start gap-4 py-2 px-8 rounded-xl text-xl !text-left md:!text-center md:px-1 text-primary hover:text-textNav font-normal">
                                    <RiPlayFill className="bg-secondary  text-primary p-4 md:p-2 rounded-full box-content" size='15px' />
                                    Tu primera <br />clase gratuita
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </Layaut>
            </main>
        </>
    )
}
export default Hero  