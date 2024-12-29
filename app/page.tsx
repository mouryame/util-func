import styles from "./page.module.css";
import { fetchAllPages } from "@/services";
import { FuncList, PageSearch } from "@/components";
import { PageListItem } from "@/types";

export const dynamic = "force-dynamic";

export default async function Home() {
  const pageList: PageListItem[] = (await fetchAllPages()) || [];
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h1>Welcome to Util Func!</h1>
        <h4>Library of Uitility Functions</h4>
        <PageSearch pageList={JSON.parse(JSON.stringify(pageList))} />
      </div>
      <FuncList pageList={JSON.parse(JSON.stringify(pageList))} />
    </div>
  );
}
