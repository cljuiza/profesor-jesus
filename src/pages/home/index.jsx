import React from "react";
import Layaut from "./Layaut";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion"
import {
    RiPlayFill,
} from "react-icons/ri";

const Home = () => {
    return (
        <>
            <head>
                <title>Aprende Idiomas</title>
                <meta name />
            </head>
            <main className="flex items-center text-dark w-full h-32">
                <Layaut className="m-15">
                    <div className="flex items-center justify-between w-full">
                        <div className="w-1/3">
                            <img src="/images/teacher.png" alt="teacher" className="w-50 h-auto ml-4" />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center">
                            <AnimatedText text="Hola, soy Julia Antonioni !" className="!text-8xl !text-left" />
                            <br />
                            <p className="my-3 text-xl pr-3">Seré tu profesora de español e ingles, conmigo hablarás estos dos idiomas de manera eficaz, fluída y con seguridad.</p>
                            {/* <p className="!text-left text-xl pt-2 pr-3 font-medium">¿ Qué esperas para empezar ?</p> */}
                            <div className="w-9/12 flex justify-around items-center flex-col md:flex-row gap-4 mt-6 ">
                                <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-full xl:w-auto bg-primary hover:bg-violet-50 text-white hover:text-primary py-2 px-6 rounded-xl text-xl border-2 border-solid border-transparent hover:border-primary">
                                    Contactanos
                                </motion.button>
                                <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-full xl:w-auto flex items-center justify-start gap-4 py-2 px-8 rounded-xl text-xl !text-left text-primary">
                                    <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
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
export default Home  