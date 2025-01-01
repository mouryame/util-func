"use client";
import styles from "./page.module.css";
export default function CopyButton({ content }: { content: string }) {
  return (
    <button
      className={styles.copyButton}
      onClick={() =>
        navigator.clipboard
          .writeText(content.split("// Example")[0])
          .then(() => {
            alert("Copied to clipboard!");
          })
          .catch(() => {
            alert("Failed to copy to clipboard!");
          })
      }
    >
      Copy
    </button>
  );
}
