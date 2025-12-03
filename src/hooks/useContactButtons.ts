type useContactButtonsProps = {
  phone?: string | null;
  whatsapp?: string | null;
  email?: string | null;
};

export default function useContactButtons({
  phone,
  whatsapp,
  email,
}: useContactButtonsProps) {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar um serviço na oficina.";
    const cleanWhatsapp = whatsapp?.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneClick = () => {
    const cleanPhone = phone?.replace(/\D/g, "");
    const phoneUrl = `tel:${cleanPhone}`;
    window.open(phoneUrl, "_self");
  };

  const handleEmailClick = () => {
    const subject = "Agendamento de Serviço";
    const body = "Olá! Gostaria de agendar um serviço na oficina.";
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, "_self");
  };

  return {
    handleWhatsAppClick,
    handlePhoneClick,
    handleEmailClick,
  };
}
