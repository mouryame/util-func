"use client";
import { IoIosSearch } from "react-icons/io";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.logoContainer}
        onClick={() => (window.location.href = "/")}
      >
        <h1>Util Func</h1>
      </div>
      {pathname !== "/" && (
        <div className={styles.searchContainer}>
          <IoIosSearch />
        </div>
      )}
    </div>
  );
}
