import { question } from "../constants";

const ProblemDescription = () => {
    return (
        <div>
            <h1 className="text-2xl">{question.name}</h1>
            <pre>{question.description}</pre>
        </div>
    );
};

export default ProblemDescription;
