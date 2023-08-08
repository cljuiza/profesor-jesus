import React from "react";
import FormContact from "./FormContact";
import Layaut from "../home/Layaut";
import { motion } from "framer-motion"
import { fadeIn } from "../../components/variants";

const Contact = () => {
    return (
        <Layaut className="pt-10 xl:pt-10 lg:pt-5 px-40">
            <div className="grid grid-cols-2">
                <div className="col-span-1 order-1 xl:order-2 xl:col-span-2 flex justify-center items-end">
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" w-10/12 lg:w-auto">
                        <img src="/images/contact.png" alt="teacher" className="w-50 h-auto lg:w-64" loading="lazy" />
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                    className="col-span-1 order-2 xl:order-1 xl:col-span-2">
                    <FormContact />
                </motion.div>
            </div>
        </Layaut>
    )
}

export default Contact