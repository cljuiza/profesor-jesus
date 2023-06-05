import React from "react";
import Layaut from "./Layaut";
import AnimatedText from "../../components/AnimatedText";



const Home =()=>{
    return (
        <div className="flex items-center text-dark w-full min-h-screen">
            <Layaut className="pt-0">
                <div className="flex items-center py-20 mt-4 justify-between w-full">  
                    <div className="w-1/3">
                         <img src="/images/teacher.png" alt="teacher" className="w-50 h-auto mr-3"/>
                    </div>
                    <div className="pt-0 w-1/2 flex flex-col items-center self-center">
                        <AnimatedText text="Hola soy Jul Antonioni !" className="!text-6x1 !text-left"/>
                        <br/>
                        <p className="my-4 text-base text-6x1 text-lg">Seré tu profesora de español, conmigo hablarás español de manera eficaz, fluída,   y con confianza.</p>
                    </div>
                </div>  
            </Layaut>
        </div>
    )
}
export default Home  