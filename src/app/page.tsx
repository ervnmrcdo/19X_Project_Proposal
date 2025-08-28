import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Group (3) Project Blog</h1>

      <div className={styles.members_clients_container}>
        <h3>Client</h3>
        <div className={styles.client}>
          <p>Ms. Juayong</p>
        </div>
        <h3>Members</h3>
        <div className={styles.members}>
          <p>Cantero</p>
          <p>Bugaoan</p>
          <p>Mercado</p>
        </div>
      </div>

      <div className={styles.project_plan_file}>
        <h3>Project plan</h3>
      </div>
    </>
  );
}
