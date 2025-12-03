import styles from "./Stars.module.css";

interface StarsProps {
  rating: number;
  size?: number;
}

export function Stars({ rating, size = 24 }: StarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className={styles.starsContainer}>
      {Array.from({ length: 5 }, (_, i) => {
        const isFull = i < fullStars;
        const isHalf = i === fullStars && hasHalf;

        return (
          <div key={i} className={styles.starWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={size}
              height={size}
              className={styles.starEmpty}
            >
              <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.59z" />
            </svg>

            {(isFull || isHalf) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={size}
                height={size}
                className={styles.starFilled}
                style={
                  isHalf
                    ? { clipPath: "inset(0 50% 0 0)" } // mostra só metade esquerda
                    : {}
                }
              >
                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.59z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
