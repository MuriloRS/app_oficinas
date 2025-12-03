import {
  MechanicServicesEnum,
  ServicesDescriptions,
  ServicesIcons,
} from "@/constants/MechanicServicesConstants";
import { Wrench } from "lucide-react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection({ services }: { services: string }) {
  const servicesList = services.split(",").map((s) => s.trim());

  const getServiceDescription = (serviceName: string): string => {
    const serviceKey = Object.values(MechanicServicesEnum).find(
      (key) => key === serviceName
    );
    return serviceKey
      ? ServicesDescriptions[serviceKey]
      : "Serviço especializado de qualidade para o seu veículo.";
  };

  return (
    <>
      <h3 className={styles.titleWithIcon}>Serviços prestados</h3>
      <div className={styles.servicesContainer}>
        {servicesList.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceNameContainer}>
              <h4 className={styles.serviceName}>{service}</h4>
              {ServicesIcons[service as MechanicServicesEnum] || (
                <Wrench className={styles.icon} />
              )}
            </div>
            <p className={styles.serviceDescription}>
              {getServiceDescription(service as MechanicServicesEnum)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
