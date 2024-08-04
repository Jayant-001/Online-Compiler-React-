export const LANGUAGE_VERSIONS: Record<Language, string> = {
    Javascript: "1.2.2",
    Typescript: "9393",
    Python: "933",
    Java: "9393",
    CPP: "9393",
    CSharp: "939",
    Ruby: "123",
    Go: "00",
    PHP: "939",
    Swift: "9338",
};

export type Language =
    | "Javascript"
    | "Typescript"
    | "Python"
    | "Java"
    | "CPP"
    | "CSharp"
    | "Ruby"
    | "Go"
    | "PHP"
    | "Swift";

export const STARTER_CODE: Record<Language, string> = {
    Javascript: "console.log('Hello Coders!');",
    Typescript: "console.log('Hello Coders!');",
    Python: "print('Hello Coders!')",
    Java: "public class Main { public static void main(String[] args) { System.out.println('Hello Coders!'); } }",
    CPP: "#include <iostream>\nusing namespace std;\n\nint main() \n{ \n\tcout << \"Hello Coders!\" << endl; \n\treturn 0; \n}",
    CSharp: "using System;\nclass Program { static void Main() { Console.WriteLine('Hello Coders!'); } }",
    Ruby: "puts 'Hello Coders!'",
    Go: "package main\nimport 'fmt'\nfunc main() { fmt.Println('Hello Coders!') }",
    PHP: "<?php echo 'Hello Coders!'; ?>",
    Swift: "import Foundation\nprint('Hello Coders!')",
};
