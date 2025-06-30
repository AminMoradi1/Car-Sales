import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>AMINCAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://my-portfolio-seven-fawn-96.vercel.app/projects" target="_blank">
          Amin Moradi portfolio
        </a>{" "}
        Next.js routing | BotoCar Project &copy;
      </footer>
    </>
  );
}

export default Layout;
