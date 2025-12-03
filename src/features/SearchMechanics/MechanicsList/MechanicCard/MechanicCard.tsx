import ContactButtonsDialog from "@/components/ContactButtonsDialog/ContactButtonsDialog";
import MechanicLogo from "@/components/MechanicLogo/MechanicLogo";
import MechanicMapsLink from "@/components/MechanicMapsLink/MechanicMapsLink";
import { Stars } from "@/components/Stars/Stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styles from "../MechanicsList.module.css";
import { Mechanic } from "../MechanicsList.type";

interface MechanicCardProps {
  mechanic: Mechanic;
}

export default function MechanicCard({ mechanic }: MechanicCardProps) {
  const router = useRouter();

  const CardFavRatingSection = (mechanic: Mechanic, isMobile = false) => {
    if (!mechanic.rating) return null;

    return (
      <div className={styles.ratingFavoriteSection}>
        <div
          className={`${styles.mechanicRating} ${
            isMobile ? styles.mechanicRatingMobile : ""
          }`}
        >
          <Stars rating={mechanic.rating} size={20} />
          <span className={styles.reviewCount}>
            {mechanic.rating} ({mechanic.user_ratings_total} reviews)
          </span>
        </div>
      </div>
    );
  };

  const onMechanicClick = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLImageElement>
    ) => {
      event.preventDefault();
      event.stopPropagation();

      if (mechanic.id) {
        router.push(ROUTES.MECHANIC_DETAIL(mechanic.id));
      }
    },
    [router, mechanic]
  );

  return (
    <div key={mechanic.id} className={`${styles.mechanicCard}`}>
      <div className={styles.mechanicImageContainer}>
        <div className={styles.mechanicImage}>
          <MechanicLogo
            name={mechanic.name}
            photos={mechanic.photos}
            services={mechanic.services}
          />
        </div>

        {CardFavRatingSection(mechanic, true)}
      </div>

      <div className={styles.mechanicInfo}>
        <Button
          onClick={onMechanicClick}
          variant="link"
          className={styles.mechanicNameButton}
        >
          <h3>
            {mechanic.name} <ExternalLink />
          </h3>
        </Button>

        <MechanicMapsLink
          latitude={mechanic.latitude}
          longitude={mechanic.longitude}
          address={mechanic.address}
        />

        <div className={styles.servicesContainer}>
          {mechanic.services?.split(",").map((service, index) => (
            <Badge variant={"secondary"} key={index}>
              {service}
            </Badge>
          ))}
        </div>
      </div>

      <div className={styles.rigthSection}>
        {CardFavRatingSection(mechanic, false)}

        <ContactButtonsDialog
          phone={mechanic.formatted_phone_number ?? ""}
          whatsapp={mechanic.whatsapp ?? ""}
          email={mechanic.contact_email ?? ""}
        />
      </div>
    </div>
  );
}
