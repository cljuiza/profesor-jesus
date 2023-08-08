import React from "react";
import Layaut from "../home/Layaut";
import { motion } from "framer-motion"
import { fadeIn } from "../../components/variants";
import TextAbout from "./TextAbout";
const About = () => {
    return (

        <Layaut className="pt-10 xl:pt-10 lg:pt-5 px-40">
            <div className="grid grid-cols-4">
                <div className="col-span-1 xl:col-span-0">Jesus</div>
                <motion.div
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="col-span-2 xl:col-span-4">
                    <TextAbout />
                </motion.div>
                <div className="col-span-1 xl:col-span-0">Julia</div>
            </div>
        </Layaut>
    )
}

export default About