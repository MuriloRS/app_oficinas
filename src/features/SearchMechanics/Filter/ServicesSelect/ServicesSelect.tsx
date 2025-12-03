import {
  MechanicServicesEnum,
  MechanicsServicesList,
  Service,
  ServicesIcons,
} from "@/constants/MechanicServicesConstants";
import { Wrench } from "lucide-react";
import { useState } from "react";
import styles from "./ServicesSelect.module.css";
import { ServiceSelectorProps } from "./ServicesSelect.type";

export default function ServiceSelector({
  selectedService,
  onServiceSelect,
}: ServiceSelectorProps) {
  const services = MechanicsServicesList;
  const [internalSelected, setInternalSelected] = useState<Service[]>([]);

  const currentSelected =
    selectedService !== undefined ? selectedService : internalSelected;

  const handleServiceClick = (service: Service) => {
    const isCurrentlySelected = currentSelected?.some(
      (s) => s.name === service.name
    );
    let newSelected: Service[];

    if (isCurrentlySelected) {
      newSelected = currentSelected.filter((s) => s.name !== service.name);
    } else {
      newSelected = [...currentSelected, service];
    }

    setInternalSelected(newSelected);
    onServiceSelect?.(newSelected);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {services.map((service, index) => {
          const isSelected = currentSelected.some(
            (s) => s.name === service.name
          );

          return (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`${styles.item} ${
                isSelected ? styles.itemSelected : styles.itemDefault
              }`}
            >
              <div className={styles.content}>
                <div
                  className={`${styles.iconBox} ${
                    isSelected ? styles.iconBoxSelected : styles.iconBoxDefault
                  }`}
                >
                  {ServicesIcons[service.value as MechanicServicesEnum] || (
                    <Wrench className={styles.icon} />
                  )}
                </div>

                <h4
                  className={`${styles.itemTitle} ${
                    isSelected
                      ? styles.itemTitleSelected
                      : styles.itemTitleDefault
                  }`}
                >
                  {service.name}
                </h4>
              </div>

              <div
                className={`${styles.ring} ${
                  isSelected ? styles.ringSelected : styles.ringDefault
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
