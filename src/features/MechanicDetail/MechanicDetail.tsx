"use client";
import ContactButtonsDialog from "@/components/ContactButtonsDialog/ContactButtonsDialog";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";
import MapsButton from "@/components/MapsButton/MapsButton";
import MechanicLogo from "@/components/MechanicLogo/MechanicLogo";
import { Button } from "@/components/ui/button";
import useContactButtons from "@/hooks/useContactButtons";
import WhatsAppIcon from "@/icons/WhatsApp";
import { openGoogleMaps } from "@/lib/maps/maps";
import { Mail, MapPin, Phone } from "lucide-react";
import { useParams } from "next/navigation";
import { renderStars } from "../SearchMechanics/SearchMechanics";
import styles from "./MechanicDetail.module.css";
import ServicesSection from "./MoreServices/ServicesSection";
import PhotosDialog from "./PhotosDialog/PhotosDialog";
import useMechanicDetail from "./useMechanicDetail";

export default function MechanicDetail() {
  const reviews = [
    {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/50?img=47",
      rating: 5,
      comment:
        "Excellent service! Mike fixed my car's engine issue quickly and at a fair price. Very professional and knowledgeable. Highly recommend!",
      date: "2 days ago",
    },
    {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/50?img=12",
      rating: 4,
      comment:
        "Good work on my brake repair. The job was done efficiently and the pricing was reasonable. Will come back for future repairs.",
      date: "1 week ago",
    },
    {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/50?img=32",
      rating: 5,
      comment:
        "Amazing service! My car was making strange noises and Mike diagnosed the problem quickly. Fixed it the same day. Very trustworthy mechanic!",
      date: "2 weeks ago",
    },
  ];

  const params = useParams();
  const mechanicId = params.slug as string;
  const { mechanic, isLoading, isError } = useMechanicDetail(mechanicId);
  const { handleWhatsAppClick, handlePhoneClick, handleEmailClick } =
    useContactButtons({
      phone: mechanic?.formatted_phone_number,
      whatsapp: mechanic?.whatsapp,
      email: mechanic?.contact_email,
    });

  const MechanicRating = (
    <>
      <h2>{mechanic?.rating}</h2>
      <div className={styles.stars}>{renderStars(mechanic?.rating || 0)}</div>
    </>
  );

  const RatingAverageSection = (
    <div className={styles.average}>
      {MechanicRating}

      <p className={styles.total}>
        Baseado em {mechanic?.user_ratings_total}{" "}
        {mechanic?.user_ratings_total === 1 ? "avaliação" : "avaliações"}
      </p>
    </div>
  );

  if (isLoading) return <LoadingComponent />;
  if (isError)
    return (
      <div>
        Infelizmente não conseguimos encontrar os dados da oficina. Tente
        novamente mais tarde.
      </div>
    );

  const hasPhotos = mechanic?.photos && mechanic?.photos.length > 1;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.profileBox}>
            <div className={styles.header}>
              <div>
                <div className={styles.profileHeader}>
                  <MechanicLogo
                    name={mechanic?.name}
                    photos={mechanic?.photos}
                    services={mechanic?.services}
                  />

                  <div className={styles.ratingContainer}>
                    <h2 className={styles.name}>{mechanic?.name}</h2>
                    <div className={styles.headerRating}>
                      {MechanicRating}({mechanic?.user_ratings_total})
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {hasPhotos && <PhotosDialog photos={mechanic?.photos} />}
              </div>
            </div>

            <div className={styles.contactBody}>
              <p className={styles.description}>{mechanic?.description}</p>

              <div className={styles.contactInfo}>
                <div>
                  <h3 className={styles.sectionTitle}>Horário de trabalho</h3>
                  {mechanic?.openingHours &&
                    Object.entries(mechanic.openingHours).map(([day, hour]) => (
                      <p className={styles.openingHours} key={day}>
                        {day}: {hour}
                      </p>
                    ))}
                </div>
                <div>
                  <h3 className={styles.sectionTitle}>
                    Informações de contato
                  </h3>

                  {mechanic?.formatted_phone_number && (
                    <p className={styles.info} color="#bc0000">
                      <Button
                        variant="link"
                        className={styles.phoneButton}
                        onClick={handlePhoneClick}
                      >
                        <Phone size={16} color="#bc0000" />{" "}
                        {mechanic?.formatted_phone_number}
                      </Button>
                    </p>
                  )}
                  {mechanic?.whatsapp && (
                    <p className={styles.info}>
                      <Button
                        variant="link"
                        className={styles.whatsappButton}
                        onClick={handleWhatsAppClick}
                      >
                        <WhatsAppIcon width={16} height={16} />
                        {mechanic?.whatsapp}
                      </Button>
                    </p>
                  )}
                  {mechanic?.contact_email && (
                    <p className={styles.info}>
                      <Button
                        variant="link"
                        className={styles.emailButton}
                        onClick={handleEmailClick}
                      >
                        <Mail size={16} color="#000000" />{" "}
                        {mechanic?.contact_email}
                      </Button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.servicesBox}>
            {mechanic?.services && (
              <ServicesSection services={mechanic?.services} />
            )}
          </div>
          <div className={styles.reviewsBox}>
            <div className={styles.reviewsHeader}>
              <h3 className={styles.title}>Avaliações de usuários</h3>
            </div>
            <div className={styles.list}>
              {reviews.map((r, i) => (
                <div key={i} className={styles.review}>
                  <div className={styles.content}>
                    <div className={styles.top}>
                      <span className={styles.name}>{r.name}</span>
                      <span className={styles.date}>{r.date}</span>
                    </div>
                    {renderStars(r.rating)}
                    <p className={styles.comment}>{r.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.card}>
            {RatingAverageSection}

            <div className={styles.rows}>
              <div className={styles.row}>
                <span>5★</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "85%" }}></div>
                </div>
                <span>108</span>
              </div>

              <div className={styles.row}>
                <span>4★</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "12%" }}></div>
                </div>
                <span>15</span>
              </div>

              <div className={styles.row}>
                <span>3★</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "3%" }}></div>
                </div>
                <span>3</span>
              </div>

              <div className={styles.row}>
                <span>2★</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "1%" }}></div>
                </div>
                <span>1</span>
              </div>

              <div className={styles.row}>
                <span>1★</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: "0%" }}></div>
                </div>
                <span>0</span>
              </div>
            </div>
          </div>
          {mechanic?.address && (
            <div className={styles.card}>
              <h3 className={styles.title}>Localização</h3>

              <div className={styles.mapPlaceholder}>
                <MapsButton
                  className={styles.mapsButton}
                  address={mechanic?.address}
                />
              </div>
              <div className={styles.address}>
                <Button
                  variant="link"
                  className={styles.mapsButtonMobile}
                  onClick={() => openGoogleMaps(mechanic.address)}
                >
                  {mechanic?.address}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.mobileSection}>
          {mechanic?.address && (
            <Button
              variant="link"
              className={styles.mapsButtonMobile}
              onClick={() => openGoogleMaps(mechanic.address)}
            >
              <MapPin size={16} />
              Mapa
            </Button>
          )}
          <ContactButtonsDialog
            phone={mechanic?.formatted_phone_number ?? ""}
            whatsapp={mechanic?.whatsapp ?? ""}
            email={mechanic?.contact_email ?? ""}
            triggerConfig={{
              variant: "default",
              className: styles.bookButton,
            }}
          />
        </div>
      </div>
    </div>
  );
}
