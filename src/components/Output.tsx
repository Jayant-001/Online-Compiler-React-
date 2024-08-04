import { Box, Button, Spinner, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from "../api";

type Props = {
    // editorRef: React.MutableRefObject<HTMLInputElement>,
    editorRef: any;
    language: string;
};

const Output = ({ editorRef, language }: Props) => {
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    const runCode = async (e: any) => {
        e.preventDefault();
        const sourceCode = editorRef.current.getValue();
        try {
            setIsLoading(true);
            const data = await executeCode("c++", sourceCode);
            setOutput(data.run.output);
            data.run.stderr ? setIsError(true) : setIsError(false);
        } catch (error: any) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description: error.response.data.message || "Unable to run the code",
                status: "error",
                duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box w="50%">
            <Button
                onClick={runCode}
                variant="outline"
                colorScheme="green"
                mb={4}
            >
                {isLoading ? <Spinner size="sm" /> : "Run"}
            </Button>
            <Box
                height="75vh"
                p={2}
                color = {isError ? "red.400" : ""}
                border="1px solid"
                borderRadius={4}
                borderColor={ isError ? "red.500" : "#333"}
            >
                {output ? output : `Click "RUN" to see the output here.`}
            </Box>
        </Box>
    );
};

export default Output;
