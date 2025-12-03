import { Star } from "lucide-react";
import MechanicsList from "./MechanicsList/MechanicsList";
import styles from "./SearchMechanics.module.css";

export const renderStars = (rating: number, size = 16) => {
  return (
    <div className={styles.starsContainer}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${styles.star} ${
            i < Math.floor(rating) ? styles.starFilled : ""
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
};

export default function SearchMechanics() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Encontre a oficina</h1>
      </div>

      <div className={styles.mainContent}>
        <MechanicsList />
      </div>
    </div>
  );
}
