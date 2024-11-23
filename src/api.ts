import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const BASE_URL = "https://emkc.org/api/v2/piston";

const API = axios.create({
    baseURL: BASE_URL,
});

export const executeCode = async (language: string, sourceCode: string, input: string) => {
    const { data } = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        stdin: input, 
        files: [
            {
                content: sourceCode,
            },
        ],
        // compile_timeout: 1000,
        // run_timeout: 1000
    });
    return data;
};
