// import Image from "next/image";
import styles from "./page.module.css";
import {
  LogosNav,
  Navbar,
  Header,
  Footer,
  Services,
  DrivingSchools,
  Offers,
  LearnPro,
  Testimonies,
  Upride,
} from "@/components";
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ color: "black", width: "100%" }}>
        <LogosNav />
        <Navbar />
      </div>
      <div className={styles.container}>
        <Header />
        <Services />
        <DrivingSchools />
        <Offers />
        <LearnPro />
        <Testimonies />
        <Upride/>
        <Footer />
      </div>
    </main>
  );
}
