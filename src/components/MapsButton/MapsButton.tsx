"use client";

import { openGoogleMaps } from "@/lib/maps/maps";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import styles from "./MapsButton.module.css";

interface MapsButtonProps {
  address: string;
  className?: string;
  text?: string;
}

export default function MapsButton({
  address,
  className,
  text,
}: MapsButtonProps) {
  return (
    <Button
      variant="secondary"
      className={`${styles.mapsButton} ${className}`}
      onClick={() => openGoogleMaps(address)}
    >
      <ExternalLink size={30} color="black" />
      {text && <span>{text}</span>}
    </Button>
  );
}
