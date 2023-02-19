export const mockCallingApi = async ({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    await new Promise(r => setTimeout(r, 2000));
    
    const mockOpenAiResult = `Resume input: ${resumeInput}\n` + 
    `Job Description input: ${jobDescriptionInput}\n` + 
    `Cover Letter input: ${coverLetterInput}\n` +
    `This is a mock result`;

    return mockOpenAiResult;
}

export const callApi = async({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    const res = await fetch("https://nxt2jckacbq5eso3h35swumoyy0uqkus.lambda-url.us-east-1.on.aws/cover_letter", {
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
    const {result} = await res.json();
    return result
}
