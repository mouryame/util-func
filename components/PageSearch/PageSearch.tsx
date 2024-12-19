"use client";
import { PageListItem } from "@/types";
import styles from "./PageSearch.module.css";
import { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export default function PageSearch({ pageList }: { pageList: PageListItem[] }) {
  const inputRef = useRef(null);
  const [list, setList] = useState<PageListItem[]>(pageList);
  const [showList, setShowList] = useState(false);

  useClickOutside(inputRef, () => setShowList(false));

  const handleSearch = (searchTerm: string) => {
    setShowList(searchTerm.length > 2);
    const filteredPageList = pageList.filter((page: PageListItem) => {
      return page.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setList(filteredPageList);
  };

  return (
    <div ref={inputRef}>
      <form>
        <input
          type="text"
          placeholder="Type to Search"
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
