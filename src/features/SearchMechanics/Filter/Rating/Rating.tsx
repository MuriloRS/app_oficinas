"use client";
import { useEffect, useState } from "react";
import { renderStars } from "../../SearchMechanics";
import styles from "./Rating.module.css";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function Rating({ value, onChange }: RatingProps) {
  const [selected, setSelected] = useState<number | null>(value || null);

  useEffect(() => {
    setSelected(value || null);
  }, [value]);

  const options = [
    { value: 5, label: "5 estrelas" },
    { value: 4, label: "4+ estrelas" },
    { value: 3, label: "3+ estrelas" },
  ];

  const handleChange = (rating: number) => {
    setSelected(rating);
    onChange?.(rating);
  };

  return (
    <div className={styles.ratingFilter}>
      {options.map((opt) => (
        <label key={opt.value} className={styles.ratingOption}>
          <input
            type="radio"
            name="rating"
            className={styles.ratingInput}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => handleChange(opt.value)}
          />
          <span className={styles.stars}>{renderStars(opt.value)}</span>
          <span className={styles.label}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
