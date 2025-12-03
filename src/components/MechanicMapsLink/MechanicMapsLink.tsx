import { MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./MechanicMapsLink.module.css";

type MechanicMapsLinkProps = {
  latitude?: number | null;
  longitude?: number | null;
  address?: string | null;
};

export default function MechanicMapsLink({
  latitude,
  longitude,
  address,
}: MechanicMapsLinkProps) {
  const hasLocation = latitude && longitude && address;
  if (!hasLocation) return null;

  return (
    <div className={styles.mechanicLocation}>
      <MapPin size={16} />
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address?.toString() || ""
        )}  `}
        target="_blank"
        rel="noopener noreferrer"
      >
        {address?.split("- RS")[0]}
      </Link>
    </div>
  );
}
