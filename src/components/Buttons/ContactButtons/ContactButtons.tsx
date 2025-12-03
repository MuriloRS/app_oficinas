"use client";

import useContactButtons from "@/hooks/useContactButtons";
import WhatsAppIcon from "@/icons/WhatsApp";
import { Mail, Phone } from "lucide-react";
import { Button } from "../../ui/button";
import styles from "./ContactButtons.module.css";

type ContactButtonsProps = {
  phone?: string | null;
  whatsapp?: string | null;
  email?: string | null;
};

export default function ContactButtons({
  phone,
  whatsapp,
  email,
}: ContactButtonsProps) {
  const { handleWhatsAppClick, handlePhoneClick, handleEmailClick } =
    useContactButtons({ phone, whatsapp, email });

  return (
    <div className={styles.container}>
      {whatsapp && (
        <Button
          size={"lg"}
          className={styles.whatsBookButton}
          onClick={handleWhatsAppClick}
        >
          <WhatsAppIcon color="white" width={16} height={16} />
          Whatsapp
        </Button>
      )}

      {phone && (
        <Button
          size={"lg"}
          className={styles.phoneBookButton}
          onClick={handlePhoneClick}
        >
          <Phone size={16} /> Telefone
        </Button>
      )}

      {email && (
        <Button
          size={"lg"}
          className={styles.emailBookButton}
          onClick={handleEmailClick}
        >
          <Mail size={16} /> Email
        </Button>
      )}
    </div>
  );
}
