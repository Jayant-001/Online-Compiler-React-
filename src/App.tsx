import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import ProblemDescription from "./components/ProblemDescription";

function App() {
    return (
        <Box minH="100vh" bg="#0f0a19" color="gray.500"
         px={2} py={8}
         >
            <ProblemDescription />
            <CodeEditor />
        </Box>
    );
}

export default App;
