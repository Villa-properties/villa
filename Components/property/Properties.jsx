import PropertyCard from "./propertyCard";
import styles from "/styles/Properties.module.scss";

export default function Properties() {
  return (
    <div className={styles.properties}>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
}
