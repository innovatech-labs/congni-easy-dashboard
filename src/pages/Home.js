import React, { useState } from "react"
import { TextareaField } from "evergreen-ui"

const textareaFieldsConfig = [
    { label: "Resume", required: true },
    { label: "Job Description", required: true },
    { label: "Cover Letter", required: false }
];

function Home() {
    const [result, setResult] = useState(null);
    const [resumeInput, setResumeInput] = useState('');
    const [jobDescriptionInput, setJobDescriptionInput] = useState('');
    const [coverLetterInput, setCoverLetterInput] = useState('');

    const states = [
        resumeInput, 
        jobDescriptionInput, 
        coverLetterInput
    ];

    const onChangeCallbacks = [
        setResumeInput, 
        setJobDescriptionInput, 
        setCoverLetterInput
    ];

    const mockOpenAiResult = `Resume input: ${resumeInput}\n` + 
    `Job Description input: ${jobDescriptionInput}\n` + 
    `Cover Letter input: ${coverLetterInput}\n` +
    `This is the mock result`;
    
    return (
        <>
            <div className='flex flex-col items-center min-h-screen'>
                <div className='text-6xl font-bold my-6 py-2' id="app-title">
                    CogniEasy
                </div>
                <p className='mt-1 text-2xl text-slate-500 text-center'>Create quality cover letter with AI technology</p>
                <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3'>
                    <div className='w-full'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
                            <div className="flex flex-col justify-center">
                                {textareaFieldsConfig.map(({ label, required }, i) => (
                                    <div key={i} className="px-6">
                                        <TextareaField
                                            label={label}
                                            required={required}
                                            style={{ minHeight: "100px" }}
                                            value={states[i]}
                                            onChange={(e) => onChangeCallbacks[i](e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="px-6">
                                <TextareaField
                                    label="Cover Letter written by AI"
                                    disabled={result === null}
                                    onChange={(e) => setResult(e.target.value)}
                                    value={result ?? ''}
                                    style={{ minHeight: "300px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold my-4 py-2 px-4 border rounded-full shadow"
                        onClick={() => setResult(mockOpenAiResult)}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
