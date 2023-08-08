import React from "react"
import Input from "../../components/Input"


const FormContact = () => {
    return (
        <div
            id="contact"
            className="pt-8 px-20 md:p-12 xl:p-20 sm:px-0"
        >
            <div className="flex flex-col gap-4">
                <h1 className="text-[40px] font-bold text-center">How we can help you</h1>
                <p className="text-[20px] text-gray-500 text-justify">
                    Follow our newsletter. We will regulary update our latest project and
                    availability.
                </p>
                <form className="mx-10 sm:mx-2">
                    <br />
                    <Input placeholder="Your name" />
                    <br />
                    <Input placeholder="Your email" />
                    <br />
                    <Input placeholder="Your phone" />
                    <br />
                    <textarea
                        className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none" name="textarea" rows="5" cols="30" placeholder="Your message">
                    </textarea>
                    <br />
                    <br />
                    <div className="text-right">
                        <button
                            type="button"
                            className="font-semibold transition-colors bg-primary hover:bg-violet-50 text-white hover:text-primary py-2 px-8 rounded-xl border-2 border-solid border-transparent hover:border-primary"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormContact