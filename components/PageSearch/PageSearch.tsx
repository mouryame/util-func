"use client";
import { PageListItem } from "@/types";
import styles from "./PageSearch.module.css";
import { useState } from "react";

export default function PageSearch({ pageList }: { pageList: PageListItem[] }) {
  const [list, setList] = useState<PageListItem[]>(pageList);
  const [showList, setShowList] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setShowList(searchTerm.length > 2);
    const filteredPageList = pageList.filter((page: PageListItem) => {
      return page.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setList(filteredPageList);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          className={styles.input}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      <ul className={`${styles.pageList} ${showList ? styles.open : ""}`}>
        {list.map((page: PageListItem) => {
          return (
            <li key={page.id}>
              <a href={`/functions/${page.id}`}>{page.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
