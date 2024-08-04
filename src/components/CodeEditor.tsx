import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Box, HStack } from "@chakra-ui/react";
import { Language, STARTER_CODE } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
    const [value, setValue] = useState("");
    const editorRef = useRef();
    const [language, setLanguage] = useState<Language>("cpp");

    const onMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelectLanguage = (language: string) => {
        setLanguage(language as Language);
        setValue(STARTER_CODE[language as Language]);
    };

    return (
        <Box >
            <HStack spacing={4} >
                <Box width="50%">
                    <LanguageSelector
                        language={language}
                        onSelect={onSelectLanguage}
                    />
                    <Editor
                        height="75vh"
                        language={language}
                        defaultValue={STARTER_CODE[language] as string}
                        theme="vs-dark"
                        value={value}
                        onMount={onMount}
                        onChange={(value) => setValue(value as string)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    );
};

export default CodeEditor;
