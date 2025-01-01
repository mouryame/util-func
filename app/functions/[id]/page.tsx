import { fetchPageContentById } from "@/services";
import styles from "./page.module.css";
import CodeBlock from "./codeblock";
import CopyButton from "./copyButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  const { title, content } = await fetchPageContentById(id);
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <CodeBlock content={content}>
        <CopyButton content={content} />
      </CodeBlock>
    </div>
  );
}
