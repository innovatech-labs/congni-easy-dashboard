const API_ENDPOINT = process.env.REACT_APP_API_URL ?? "http://127.0.0.1:8000";

export const callApi = async({resumeInput, jobDescriptionInput, coverLetterInput}) => {
    const res = await fetch(`${API_ENDPOINT}/cover_letter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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
