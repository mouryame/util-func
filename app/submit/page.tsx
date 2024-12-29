"use client";
import { createPage } from "@/services";
import styles from "./submit.module.css";

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  await createPage({ title, content, languageId: 1 });
  (event.target as HTMLFormElement).reset();
}

export default function Page() {
  return (
    <div>
      <h1>Submit Page</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className={styles.textarea}
          placeholder="Content"
          name="content"
        ></textarea>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
