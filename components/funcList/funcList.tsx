import { PageListItem } from "@/types";
import styles from "./funcList.module.css";

export default async function FuncList({
  pageList,
}: {
  pageList: PageListItem[];
}) {
  return (
    <ul className={styles.funcList}>
      {pageList.map((page: PageListItem) => {
        return <ListItem key={page.id} page={page} />;
      })}
    </ul>
  );
}

function ListItem({ page }: { page: PageListItem }) {
  return (
    <li className={styles.listItem}>
      <a href={`/functions/${page.id}`}>{page.title}</a>
    </li>
  );
}
