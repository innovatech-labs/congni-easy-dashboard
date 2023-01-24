export const mockCallingApi = async ({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    await new Promise(r => setTimeout(r, 2000));
    
    const mockOpenAiResult = `Resume input: ${resumeInput}\n` + 
    `Job Description input: ${jobDescriptionInput}\n` + 
    `Cover Letter input: ${coverLetterInput}\n` +
    `This is a mock result`;

    return mockOpenAiResult;
}