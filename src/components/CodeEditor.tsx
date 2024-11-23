import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import {
    Box,
    Button,
    HStack,
    Spinner,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { Language, STARTER_CODE } from "../constants";
import Output from "./Output";
// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
// import { MonacoBinding } from "y-monaco";
import { executeCode } from "../api";
import Split from "react-split";

const CodeEditor = () => {
    const [value, setValue] = useState("");
    const editorRef: any = useRef();
    const [language, setLanguage] = useState<Language>("cpp");
    const toast = useToast();

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [input, setInput] = useState("");

    const onMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelectLanguage = (language: string) => {
        setLanguage(language as Language);
        setValue(STARTER_CODE[language as Language]);
    };

    const runCode = async (e: any) => {
        e.preventDefault();

        const sourceCode = editorRef.current.getValue();

        // console.log(language, sourceCode, input)
        // return;
        try {
            setIsLoading(true);
            const data = await executeCode(language, sourceCode, input);
            setOutput(data.run.output);
            data.run.stderr ? setIsError(true) : setIsError(false);
        } catch (error: any) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description:
                    error.response.data.message || "Unable to run the code",
                status: "error",
                duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box>
            <VStack spacing={4}>
                <HStack spacing="24px">
                    <LanguageSelector
                        language={language}
                        onSelect={onSelectLanguage}
                    />
                    <Button
                        mb={2}
                        onClick={runCode}
                        variant="outline"
                        colorScheme="green"
                    >
                        {isLoading ? <Spinner size="sm" /> : "Run"}
                    </Button>
                </HStack>
                <Split className="split w-full">
                    <Editor
                        width="50%"
                        height="75vh"
                        language={language}
                        defaultValue={STARTER_CODE[language] as string}
                        theme="vs-dark"
                        value={value}
                        onMount={onMount}
                        onChange={(value) => setValue(value as string)}
                    />
                    <Output
                        output={output}
                        input={input}
                        setInput={setInput}
                        isError={isError}
                    />
                </Split>
            </VStack>
        </Box>
    );
};

export default CodeEditor;
