import React, { useState } from "react";
import Layaut from "./Layaut";
import AnimatedText from "../../components/AnimatedText";
import { motion } from "framer-motion"
import { fadeIn } from "../../components/variants";
import { useNavigate } from 'react-router-dom';
import {
    RiPlayFill,
} from "react-icons/ri";

const Hero = ({ name, title, desc, img }) => {
    const navigate = useNavigate();

    const [shouldJump, setShouldJump] = useState(true);
    const jumpAnimation = {
        y: shouldJump ? [-10, 0, -10] : 0,
        transition: {
            duration: 3,
            times: [0, 0.5, 1],
            repeat: shouldJump ? Infinity : 0,
        },
    };
    const handleMouseEnter = () => {
        setShouldJump(false);
    };

    const handleMouseLeave = () => {
        setShouldJump(true);
    };

    return (
        <>
            <main className="flex items-center text-dark w-full">
                <Layaut className="m-15 pt-20 xl:pt-10 lg:pt-5">
                    <div className={`flex items-center justify-around w-full xl:flex-col ${name === "Jesus" && "flex-row-reverse"} `}>
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className=" w-1/3 lg:w-auto xl:px-3 lg:pt-0">
                            <img src={img} alt="teacher" className="w-50 h-auto lg:w-64" loading="lazy" />
                        </motion.div>
                        <div className="w-1/2 xl:w-auto flex flex-col items-center self-center">
                            <AnimatedText text={title} className="!text-8xl !text-left sm:!text-3xl sm:mt-5 xs:!mt-5 xl:!text-center xl:!text-3xl xl:!mt-10" />
                            <br />
                            <motion.p
                                variants={fadeIn("up", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="my-3 xs:!mt-0 text-xl pr-3 sm:text-md sm:!text-center text-gray-600">
                                {desc}
                            </motion.p>
                            {/* <p className="!text-left text-xl pt-2 pr-3 font-medium">¿ Qué esperas para empezar ?</p> */}
                            <motion.div
                                variants={fadeIn("up", 0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="min-w-full flex justify-evenly items-center  md:flex-row xs:flex-col gap-4 mt-6 lg:self-center pr-3">
                                <motion.button onClick={() => navigate("/contact")} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="transition-colors bg-primary hover:bg-violet-50 text-white hover:text-primary py-2 px-6 rounded-xl text-xl border-2 border-solid border-transparent hover:border-primary">
                                    Contactanos
                                </motion.button>
                                <motion.button animate={jumpAnimation}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} className="xs:!mt-5 flex items-center justify-start gap-4 py-2 px-8 rounded-xl text-xl !text-left md:!text-center md:px-1 text-primary hover:text-textNav font-normal">
                                    <RiPlayFill className="bg-secondary text-primary p-4 md:p-2 rounded-full box-content" size='15px' />
                                    Tu primera <br />clase gratuita
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </Layaut>
            </main >
        </>
    )
}
export default Hero  