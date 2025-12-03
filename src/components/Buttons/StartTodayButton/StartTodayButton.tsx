"use client";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import styles from "./StartTodayButton.module.css";

export default function StartTodayButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.SEARCH);
  };

  return (
    <button onClick={handleClick} className={styles.ctaButton}>
      Comece a usar hoje
    </button>
  );
}
