import styles from "/styles/Navbar.module.scss";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>villa</div>
      <div className={styles.filter}>
        <p>filter</p>
        <div className={styles.filter_icon}>
          <TuneIcon />
        </div>
      </div>
      <div className={styles.account}>
        <button>sign up</button>
      </div>
    </div>
  );
};
