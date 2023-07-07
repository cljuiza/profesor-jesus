import React from "react";
import Layaut from "./Layaut";
import { englishBenefits } from "./data/benefits"
import AcordionCard from "../../components/AcordionCard";

const Benefits = () => {
    return (
        <div className="w-full inline-block">
            <div className="bg-gray-100 pt-12 pb-12 xl:pb-0 gap-10">
                <h1 class="text-2xl font-medium text-gray-700 text-center">
                    Beneficios de aprender con nosotros
                </h1>
                <Layaut className="pt-14 pb-0 xl:pt-0 xl:pb-10 lg:pt-0 lg:pb-10">
                    <div className="container">
                        <div className="grid grid-cols-4 md:grid-cols-1 xl:grid-cols-2">
                            {englishBenefits.map((e, index) =>
                                <div key={index} className="px-10 xs:px-5 xl:mt-12" >
                                    <AcordionCard title={e.title} desc={e.desc} icon={e.icon} />
                                </div>
                            )}
                        </div>
                    </div>
                </Layaut>
            </div>
        </div>

    )
}
export default Benefits  