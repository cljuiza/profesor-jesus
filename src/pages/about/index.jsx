import React from "react";
import Layaut from "../home/Layaut";
// import { motion } from "framer-motion"
// import { fadeIn } from "../../components/variants";
// import TextAbout from "./TextAbout";
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

import { motion } from "framer-motion"
import { fadeIn } from "../../components/variants";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    })
    return (
        <Layaut className="pt-10 xl:pt-10 lg:pt-5 px-40">
            <section className="section" id="about" ref={ref}>
                <div className="container mx-auto">
                    <div className="flex items-center gap-y-10 lg:flex-row ">
                        <motion.div
                            variants={fadeIn("right", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="flex-1 bg-aboutJesus bg-contain bg-no-repeat h-[480px] mix-blend-lighten bg-top">
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex-1 mx-24">
                            <h1 className=" text-black text-[36px] font-bold mb-4 mt-24">Jesus Antonioni</h1>
                            <h3 className="mb-4  text-2xl font-medium">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h3>
                            <p className="mb-6 text-xl">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                            <div className="flex gap-x-8 lg-gap-x-10 mb-12">
                                <div>
                                    <div className="text-[40px] text-footer mb-1">
                                        {inView ? <CountUp start={0} end={30} duration={4} /> : null}
                                    </div>
                                    <div className=" text-sm font-bold text-primary">
                                        Años de <br />
                                        Experiencia
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-footer mb-1">
                                        {inView ? <CountUp start={0} end={500} duration={4} /> : null}
                                        {/* K+ */}
                                    </div>
                                    <div className=" text-sm font-bold text-primary">
                                        Total de<br />
                                        Alumnos
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-footer mb-1">
                                        +
                                        {inView ? <CountUp start={0} end={450} duration={4} /> : null}
                                    </div>
                                    <div className="text-sm font-bold text-primary">
                                        Casos de <br />
                                        Exito
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <br />
                    <br />

                    <div className="flex items-center gap-y-10 lg:flex-row ">
                        <motion.div
                            variants={fadeIn("right", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="flex-1 mx-24">
                            <h1 className=" text-black text-[36px] font-bold mb-4 text-right mt-24">Julia Antonioni</h1>
                            <h3 className="mb-4  text-2xl font-medium text-right">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h3>
                            <p className="mb-6 text-xl text-right">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                            <div className="flex gap-x-8 lg-gap-x-10 mb-12 justify-end">
                                <div>
                                    <div className="text-[40px] text-footer mb-1 ">
                                        {inView ? <CountUp start={0} end={10} duration={4} /> : null}
                                    </div>
                                    <div className=" text-sm font-bold text-primary">
                                        Años de <br />
                                        Experiencia
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-footer mb-1">
                                        {inView ? <CountUp start={0} end={200} duration={4} /> : null}
                                        {/* K+ */}
                                    </div>
                                    <div className=" text-sm font-bold text-primary">
                                        Total de<br />
                                        Alumnos
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-footer mb-1">
                                        +
                                        {inView ? <CountUp start={0} end={150} duration={4} /> : null}
                                    </div>
                                    <div className="text-sm font-bold text-primary">
                                        Casos de <br />
                                        Exito
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex-1 bg-aboutJulia bg-contain bg-no-repeat h-[480px] mix-blend-lighten bg-top">
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layaut >
    )
}

export default About