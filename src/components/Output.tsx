import { Box, Textarea } from "@chakra-ui/react";
import Split from "react-split";

type Props = {
    output: any,
    input: any,
    setInput: any,
    isError: any
};

const Output = ({ output, input, setInput, isError }: Props) => {
    // const [isLoading, setIsLoading] = useState(false);
    
    // const [input, setInput] = useState("")

    // const runCode = async (e: any) => {
    //     e.preventDefault();

    //     const sourceCode = editorRef.current.getValue();
    //     try {
    //         setIsLoading(true);
    //         const data = await executeCode(language, sourceCode, input);
    //         setOutput(data.run.output);
    //         data.run.stderr ? setIsError(true) : setIsError(false);
    //     } catch (error: any) {
    //         console.log(error);
    //         toast({
    //             title: "An error occurred.",
    //             description: error.response.data.message || "Unable to run the code",
    //             status: "error",
    //             duration: 6000,
    //         });
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <Box border="1px" borderColor="red.500" height="75vh" width="50%">
            <Split direction="vertical" className="border-5 border h-full border-blue-600">
                <Box border="1px solid" borderRadius={4}>
                    <Textarea
                        width="100%"
                        height="100%"
                        border="none"
                        value={input}
                        placeholder="Inputs will go here"
                        onChange={(e) => setInput(e.target.value)}
                        outline="none"
                        resize="none"
                        _focus={{ boxShadow: "none" }}
                    />
                </Box>
                <Box
                    height="35vh"
                    p={2}
                    color={isError ? "red.400" : ""}
                    border="1px solid"
                    borderRadius={4}
                    borderColor={isError ? "red.500" : "#333"}
                >
                    <pre>
                        {output
                            ? output
                            : `Click "RUN" to see the output here.`}
                    </pre>
                </Box>
            </Split>
        </Box>
    );
};

export default Output;
