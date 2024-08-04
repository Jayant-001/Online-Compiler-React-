export const LANGUAGE_VERSIONS: Record<string, string> = {
    python: "3.10.0",
    java: "15.0.2",
    "cpp": "10.2.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    csharp: "6.12.0",
    c: "10.0.0",
    ruby: "3.0.1",
    go: "1.16.2",
    php: "8.2.3",
    swift: "5.3.3",
    rust: "1.68.2",
    kotlin: "1.8.20"
};

export type Language =
    | "javascript"
    | "typescript"
    | "python"
    | "java"
    | "cpp"
    | "csharp"
    | "ruby"
    | "go"
    | "php"
    | "swift"
    | "rust"
    | "kotlin"
    | "c";

export const STARTER_CODE: Record<string, string> = {
    javascript: "console.log('Hello Coders!');",
    typescript: "console.log('Hello Coders!');",
    python: "print('Hello Coders!')",
    java: `public class Main { 
    public static void main(String[] args) { 
        System.out.println("Hello Coders!"); 
    } 
}`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() \n{ \n\tcout << "Hello Coders!" << endl; \n\treturn 0; \n}`,
    csharp: `using System;\nclass Program { \n\tstatic void Main() { \n\t\tConsole.WriteLine("Hello Coders!"); \n\t} \n}`,
    ruby: "puts 'Hello Coders!'",
    go: `package main\nimport "fmt"\nfunc main() { \n\tfmt.Println("Hello Coders!") \n}`,
    php: `<?php \necho 'Hello Coders!'; \n?>`,
    swift: `import Foundation\nprint("Hello Coders!")`,
    kotlin: `fun main() {\n\tprintln("Hello Coders!")\n}`,
    c: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello Coders!\\n");\n\treturn 0;\n}`,
    rust: `fn main() {\n\tprintln!("Hello Coders!");\n}`,
};