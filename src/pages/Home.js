import React from "react"
import { useNavigate } from 'react-router-dom';
import { TextareaField } from "evergreen-ui"
import NavBar from "../components/NavBar";

const textareaFieldsConfig = [
    { label: "Resume", required: true },
    { label: "Job Description", required: true },
    { label: "Cover Letter", required: false }
];

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar />
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
            <div className="flex justify-center">
                <button 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-4 py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => navigate("result")}
                >
                    Generate Cover Letter
                </button>
            </div>
        </>
    );
}

export default Home;
