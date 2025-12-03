import {
  MechanicServicesEnum,
  ServicesIcons,
} from "@/constants/MechanicServicesConstants";
import { getSupabaseImageUrl } from "@/lib/supabase/storage";
import { Wrench } from "lucide-react";
import Image from "next/image";
import styles from "./MechanicLogo.module.css";

type MechanicLogoProps = {
  name?: string | null;
  photos?: string[] | null;
  services?: string | null;
};

export default function MechanicLogo({
  name = "",
  photos = null,
  services = null,
}: MechanicLogoProps) {
  const isValidImage = photos && photos.length > 0;

  const imageUrl = isValidImage ? getSupabaseImageUrl(photos?.[0] || "") : "";
  const shouldShowMechanicLogo = isValidImage && imageUrl;

  return shouldShowMechanicLogo ? (
    <Image src={imageUrl} alt={name || ""} width={136} height={136} />
  ) : (
    ServicesIcons[services?.split(",")[0] as MechanicServicesEnum] || (
      <Wrench className={styles.icon} />
    )
  );
}
