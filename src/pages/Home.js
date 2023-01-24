import React from "react"
import { useNavigate } from 'react-router-dom';
import { TextareaField } from "evergreen-ui"

const textareaFieldsConfig = [
    { label: "Resume", required: true },
    { label: "Job Description", required: true },
    { label: "Cover Letter", required: false }
];

function Home() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='text-6xl font-bold my-6' id="app-title">
                Innovatech
            </div>
            <p className='mt-1 text-2xl text-slate-500'>Create quality cover letter with AI technology</p>
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3'>
                <form className='w-full'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
                        {textareaFieldsConfig.map(({ label, required }, i) => (
                            <div key={i} className="px-6">
                                <TextareaField
                                    label={label}
                                    required={required}
                                    style={{ minHeight: "200px" }}
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
            <div className="flex justify-center">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold mt-4 py-2 px-4 border rounded-full shadow">
                    Generate
                </button>
            </div>
        </div>
    );
}

export default Home;
