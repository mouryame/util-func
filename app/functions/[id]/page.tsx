import { fetchPageContentById } from "@/services";
import styles from "./page.module.css";
import Syntax from "@/components/syntax";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number((await params).id);

  const { title, content } = await fetchPageContentById(id);
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.codeBlock}>
        <Syntax>{content}</Syntax>
      </div>
    </div>
  );
}
