// import Image from "next/image";
import styles from "./page.module.css";
import { LogosNav } from "@/components";
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ color: "black", border:'solid black 1px', width:'100%' }}>
        <LogosNav/>
      </div>
      <div className={styles.container}>
     
      </div>
    </main>
  );
}
