import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Syntax({ children }) {
  return (
    <SyntaxHighlighter language="javascript" style={vs2015}>
      {children}
    </SyntaxHighlighter>
  );
}
