import React, { useState } from "react"
import { TextareaField } from "evergreen-ui"
import { callApi } from "../utils/apiHelper";
import Spinner from "../components/Spinner";
import CopyToClipboardButton from "../components/CopyToClipboardButton"

const textareaFieldsConfig = [
    { label: "Resume", required: true },
    { label: "Job Description", required: true },
    { label: "Cover Letter", required: false }
];

const baseClassesForButton = " bg-emerald-500 text-white font-semibold my-4 py-2 px-4 border rounded-full shadow"

function Home() {
    const [isLoadingResult, setIsLoadingResult] = useState(false);
    const [result, setResult] = useState(null);
    const [resumeInput, setResumeInput] = useState('');
    const [jobDescriptionInput, setJobDescriptionInput] = useState('');
    const [coverLetterInput, setCoverLetterInput] = useState('');

    const states = [
        resumeInput,
        jobDescriptionInput,
        coverLetterInput
    ];

    const toDisableButton = resumeInput.length === 0 || jobDescriptionInput.length === 0

    const onChangeCallbacks = [
        setResumeInput,
        setJobDescriptionInput,
        setCoverLetterInput
    ];

    const handleButtonClick = async () => {
        setIsLoadingResult(true);
        const generatedCoverLetter = await callApi({ resumeInput, jobDescriptionInput, coverLetterInput });
        setResult(generatedCoverLetter);
        setIsLoadingResult(false);
    }

    return (
        <>
            <div className='flex flex-col items-center min-h-screen'>
                <div className='text-6xl font-bold my-6 py-2' id="app-title">
                    CogniEasy
                </div>
                <p className='mt-1 text-2xl text-slate-500 text-center'>Generate cover letter with AI technology</p>
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
                                {
                                    isLoadingResult
                                        ? <Spinner />
                                        : <div>
                                            <TextareaField
                                                label="Cover Letter written by AI"
                                                disabled={result === null}
                                                onChange={(e) => setResult(e.target.value)}
                                                value={result ?? ''}
                                                style={{ minHeight: "300px" }}
                                            />
                                            <div className="flex flex-row justify-end">
                                                <CopyToClipboardButton result={result} key={result} />
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        disabled={toDisableButton}
                        className={`${baseClassesForButton} ${toDisableButton ? "disabled:opacity-50" : "hover:bg-emerald-600"}`}
                        onClick={handleButtonClick}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
