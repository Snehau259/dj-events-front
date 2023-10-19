import React from "react";
import Layout from "./layout";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
//import '../styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DJ Events</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
            <Link href="/events/add"> Add Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
