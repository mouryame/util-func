import Image from "next/image";
import styles from "./page.module.css";
import { fetchAllPages } from "@/services";
import { PageSearch } from "@/components";
import { PageListItem } from "@/types";

export default async function Home() {
  const pageList: PageListItem[] = await fetchAllPages();
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to Util Func!</h1>
        <h4>Library of Uitility Functions</h4>
      </div>
      <PageSearch pageList={JSON.parse(JSON.stringify(pageList))} />
    </div>
  );
}
