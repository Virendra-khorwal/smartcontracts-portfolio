import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/">
        <p
          className={styles.gradientText1}
          style={{ cursor: "pointer", fontSize: "1.2 rem", fontWeight: "bold" }}
        >
          {" "}
          Smart Contract Portfolio
        </p>
      </Link>
      <ConnectWallet />
    </div>
  );
};

export default Navbar;
