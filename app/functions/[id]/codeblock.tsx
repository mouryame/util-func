import Syntax from "@/components/syntax";
import styles from "./page.module.css";

export default function CodeBlock({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.codeBlock}>
        {children}
        <Syntax>{content}</Syntax>
      </div>
    </>
  );
}
