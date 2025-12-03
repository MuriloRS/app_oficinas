import { Heart } from "lucide-react";
import { useState } from "react";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = () => {
  const [favorited, setFavorited] = useState(false);

  return (
    <Heart
      className={`${favorited ? styles.active : ""} ${styles.heartIcon}`}
      aria-label="Add to favorites"
      onClick={() => setFavorited(!favorited)}
    />
  );
};

export default FavoriteButton;
