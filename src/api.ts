import axios from "axios";

const BASE_URL = "https://emkc.org/api/v2/piston";

const API = axios.create({
    baseURL: BASE_URL,
});

export const executeCode = async (language: string, sourceCode: string) => {
    const { data } = await API.post("/execute", {
        language: language,
        version: "10.2.0",
        stdin: "10 20",
        files: [
            {
                name: "my_cpde.cpp",
                content: sourceCode,
            },
        ],
    });
    return data;
};
