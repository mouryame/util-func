"use client";
import { PageListItem } from "@/types";
import styles from "./PageSearch.module.css";
import { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export default function PageSearch({ pageList }: { pageList: PageListItem[] }) {
  const inputRef = useRef(null);
  const [list, setList] = useState<PageListItem[]>(pageList);
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(0);

  useClickOutside(inputRef, () => setShowList(false));

  const handleSearch = (searchTerm: string) => {
    setShowList(searchTerm.length > 2);
    const filteredPageList = pageList.filter((page: PageListItem) => {
      return page.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setList(filteredPageList);
  };

  const handleKeyPress = (e: any) => {
    switch (e.key) {
      case "ArrowDown":
        setSelected(selected === list.length - 1 ? 0 : selected + 1);
        break;
      case "ArrowUp":
        setSelected(selected === 0 ? list.length - 1 : selected - 1);
        break;
      case "Enter":
        e.preventDefault();
        window.location.href = `/functions/${list[selected].id}`;
        break;
      default:
        setSelected(0);
        break;
    }
  };

  return (
    <div ref={inputRef} className={styles.searchContainer}>
      <form>
        <input
          type="text"
          placeholder="Type to Search"
          className={styles.input}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </form>
      <ul className={`${styles.pageList} ${showList ? styles.open : ""}`}>
        {list.map((page: PageListItem, index: number) => {
          return (
            <li
              key={page.id}
              className={selected === index ? styles.active : ""}
            >
              <a href={`/functions/${page.id}`}>{page.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
