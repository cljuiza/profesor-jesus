import React from "react";
import Layaut from "./Layaut";
import { englishBenefits } from "./data/benefits"
import AcordionCard from "../../components/AcordionCard";

const Benefits = () => {
    return (
        <div className="w-full inline-block">
            <div className="bg-gray-100 pt-12 pb-12 gap-10">
                <h1 class="text-2xl font-medium text-gray-700 text-center">
                    Beneficios de aprender con nosotros
                </h1>
                <Layaut className="pt-14 pb-0">
                    <div className="flex justify-center items-center">
                        {englishBenefits.map((e, index) =>
                            <div key={index} className="mx-10" >
                                <AcordionCard title={e.title} desc={e.desc} />
                            </div>
                        )}

                    </div>
                </Layaut>
            </div>
        </div>

    )
}
export default Benefits  