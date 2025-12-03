"use client";

import {
  MechanicServicesEnum,
  ServicesIcons,
} from "@/constants/MechanicServicesConstants";
import { useState } from "react";
import SearchBar from "../SearchBar.tsx/SearchBar";
import styles from "./HomeSearch.module.css";

const services = [
  {
    id: 1,
    icon: ServicesIcons[MechanicServicesEnum.BorrachariaPneus],
    label: MechanicServicesEnum.BorrachariaPneus,
  },
  {
    id: 2,
    icon: ServicesIcons[MechanicServicesEnum.EsteticaAutomotiva],
    label: MechanicServicesEnum.EsteticaAutomotiva,
  },
  {
    id: 3,
    icon: ServicesIcons[MechanicServicesEnum.AutoCenter],
    label: MechanicServicesEnum.AutoCenter,
  },
];

export default function HomeSearch() {
  const [selectedBadge, setSelectedBadge] = useState<string | undefined>();

  const handleBadgeSelect = (badge: string) => {
    if (selectedBadge === badge) {
      setSelectedBadge(undefined);
    } else {
      setSelectedBadge(badge);
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchBar
          selectedBadge={selectedBadge}
          setSelectedBadge={setSelectedBadge}
        />
      </div>

      <div className={styles.badgeContainer}>
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`${
                selectedBadge === service.label ? styles.selectedBadge : ""
              } ${styles.badge}`}
              onClick={() => handleBadgeSelect(service.label)}
            >
              {IconComponent}
              <span>{service.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
