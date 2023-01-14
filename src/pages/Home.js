import React from "react"
import { TextareaField } from "evergreen-ui"

const textareaFieldsConfig = [
    { label: "Resume", required: true },
    { label: "Job Description", required: true },
    { label: "Cover Letter", required: false }
];

function Home() {
    return (
        <>
            <div className="flex flex-col flex-wrap md:flex-row mt-6 justify-center">
                {textareaFieldsConfig.map(({ label, required }, i) => (
                    <div key={i} className="basis-1/1 px-6 md:basis-1/2">
                        <TextareaField
                            label={label}
                            required={required}
                            style={{ minHeight: "200px" }}
                        />
                    </div>
                ))} 
            </div>
            <div className="flex justify-center">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-4 py-2 px-4 border border-gray-400 rounded shadow">
                    Generate Cover Letter
                </button>
            </div>
        </>
    );
}

export default Home;
