export const mockCallingApi = async ({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    await new Promise(r => setTimeout(r, 2000));
    
    const mockOpenAiResult = `Resume input: ${resumeInput}\n` + 
    `Job Description input: ${jobDescriptionInput}\n` + 
    `Cover Letter input: ${coverLetterInput}\n` +
    `This is a mock result`;

    return mockOpenAiResult;
}

export const callApi = async({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    const res = await fetch("http://127.0.0.1:8000/cover_letter", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "resume": resumeInput,
            "job_posting": jobDescriptionInput,
            "past_experiences": coverLetterInput
        })
    });
    const result = await res.text(); // .json() might be more preferred.  Some changes might be needed on backend
    return result
}
