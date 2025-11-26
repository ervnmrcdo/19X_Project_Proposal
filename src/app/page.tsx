import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.big_title}>Faculty Records Project Blog</h1>

        <div className={styles.members_clients_container}>
          <div className={styles.people_wrapper}>
            <h4>Client</h4>
            <div className={styles.people}>
              <p>Prof. Rich Juayong</p>
              <p>Prof. Francis Cabarle</p>
            </div>
          </div>
          <div className={styles.people_wrapper}>
            <h4>Members</h4>
            <div className={styles.people}>
              <p>Bugaoan</p>
              <p>Cantero</p>
              <p>Mercado</p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className={styles.content_container}>
        <h3>Project Definition</h3>
        <p>
          A centralized database for faculty and student records that would
          scurely store valuable information, aid in tedious document
          management, and benefit both the administrators, faculty, and
          studentsa alike
        </p>
      </div>

      <div className={styles.content_container}>
        <h3>Rationale</h3>
        <p>
          The department currently manually stores these records with a mix of
          Microsoft Word, Google Forms, and individual spreadsheets. This makes
          for a process that is slow, error-prone, and rigorous. Faculty members
          would also have to manually input their works, which are often
          scattered over different websites using different formats such as APA,
          MLA, and the like
        </p>
      </div>
      <div className={styles.content_container}>
        <h3>Roadmap</h3>
        <p></p>
      </div>

      <div className={styles.content_container}>
        <h3>Project Features</h3>
        <ul>
          <li>Store valuable information for faculty and students,</li>
          <li>Secure valuable information for faculty and students,</li>
          <li>Showcase awards and publications of faculty and students ,</li>
          <li>
            Automatically determine the eligibility of faculty and students for
            various awards,
          </li>

          <li>
            Automatically alert the administrator for any eligible awardees
            within the department,
          </li>
          <li>
            Fill up the corresponding documents for application of eligible
            awards,
          </li>
          <li>
            CV generator that include all publications as well as classes
            taught, projects supervised and other data not available in Google
            Scholar/Scopus
          </li>
        </ul>
      </div>

      <div className={styles.content_container}>
        <h3>Project Plan</h3>
        <a
          href="https://docs.google.com/document/d/1vrB_f7NDpS7h6MN1fyHJyi8B97Hqz0bxVrKCC4uffew/edit?usp=sharing"
          target="_blank"
        >
          Project Specifications Link
        </a>
      </div>

      <div className={styles.content_container}>
        <h3>Chapter 28 Discussion Video</h3>
        <a
          href="https://drive.google.com/file/d/1WoB8y76nDjvWM-c7wJNQOAFZNarJyGx0/view?t=4"
          target="_blank"
        >
          Video Link
        </a>
      </div>

      <div className={styles.content_container}>
        <h3>DCS Records System Requirements </h3>
        <a
          href="https://docs.google.com/document/d/1i44wPfOlEzdyETNkG0bAWcQvT5rZ6guNcPaGs-Cq9HE/edit?tab=t.0"
          target="_blank"
        >
          Link
        </a>
      </div>

      <div className={styles.content_container}>
        <h3>Course Agreement</h3>
        <a
          href="https://drive.google.com/file/d/1eoODnuypMgqdXLsE8Pf9zdUMRVBi7U6q/view?usp=sharing"
          target="_blank"
        >
          Link
        </a>
      </div>
      <div className={styles.content_container}>
        <h3>Project Demo: November 5, 2025</h3>
        <a
          href="https://drive.google.com/drive/folders/1GGUZ3SQMjdTBKFGW2tweGozFGU7bOCCI?usp=sharing"
          target="_blank"
        >
          Link
        </a>
      </div>
      <div className={styles.content_container}>
        <h3>Software Test Report</h3>
        <a
          href="https://drive.google.com/file/d/17P-omS4qVnl-HgieHnCJBJ1Icbg2dYOa/view?usp=sharing"
          target="_blank"
        >
          Link
        </a>
      </div>
    </>
  );
}
