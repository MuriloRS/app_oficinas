import StartTodayButton from "@/components/Buttons/StartTodayButton/StartTodayButton";
import HomeSearch from "@/features/HomeSearch/HomeSearch";
import {
  Calendar,
  Clock10,
  DollarSign,
  MapPin,
  ShieldIcon,
  StarIcon,
} from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const benefits = [
    {
      id: 1,
      icon: MapPin,
      title: "Networking local",
      description:
        "Encontre mecânicos na sua área com localização detalhada e informações de contato.",
      color: "#3b82f6",
      bgColor: "#dbeafe",
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Preço transparente",
      description:
        "Compare preços e peça orçamentos de vários mecânicos antes de decidir.",
      color: "#10b981",
      bgColor: "#d1fae5",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Fácil de agendar",
      description:
        "Agende consultas on-line e gerencie seu histórico de serviços em um só lugar.",
      color: "#8b5cf6",
      bgColor: "#ede9fe",
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <h1>
            Encontre <span className={styles.highlight}>oficinas</span>{" "}
            confiáveis perto de você!
          </h1>
          <p>
            Conecte-se com profissionais automotivos certificados na sua região.
            Receba orçamentos, compare serviços e agende consultas
            instantaneamente.
          </p>

          <HomeSearch />
        </div>

        <div className={styles.whyChoose}>
          <div className={styles.whyChooseItem}>
            <span>
              <h3>
                <ShieldIcon fill="#10b981" className={styles.shieldIcon} />
                Profissionais verificados
              </h3>
            </span>
            <p>
              Todos os mecânicos são verificados e certificados para sua
              tranquilidade
            </p>
          </div>
          <div className={styles.whyChooseItem}>
            <h3>
              <Clock10 className={styles.clockIcon} />
              Disponibilidade 24 horas
            </h3>
            <p>
              Serviços de emergência disponíveis 24 horas para reparos urgentes.
            </p>
          </div>
          <div className={styles.whyChooseItem}>
            <h3>
              <StarIcon fill="#f59e0b" className={styles.starIcon} />
              Serviço com melhor avaliação
            </h3>
            <p>
              Avaliações e classificações de clientes ajudam você a escolher os
              melhores mecânicos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.benefitSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Porque a MechSearch?</h2>
          <p className={styles.sectionSubtitle}>
            Conectando você com os profissionais automotivos certos
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.id} className={styles.benefitCard}>
                <div
                  className={styles.iconContainer}
                  style={{ backgroundColor: benefit.bgColor }}
                >
                  <IconComponent
                    className={styles.benefitIcon}
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Pronto para encontrar sua oficina?</h2>
          <p className={styles.subtitle}>
            Junte-se a milhares de clientes satisfeitos que confiam na
            MechSearch
          </p>

          <StartTodayButton />
        </div>
      </section>
    </div>
  );
}
