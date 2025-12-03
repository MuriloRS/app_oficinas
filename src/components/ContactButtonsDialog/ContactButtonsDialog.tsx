import { MessageSquare } from "lucide-react";
import ContactButtons from "../Buttons/ContactButtons/ContactButtons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import styles from "./ContactButtonsDialog.module.css";

type ContactButtonsDialogProps = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  triggerConfig: {
    variant?: "outline" | "default";
    className: string;
  };
};

export default function ContactButtonsDialog({
  phone,
  whatsapp,
  email,
  triggerConfig = { variant: "outline", className: "" },
}: ContactButtonsDialogProps) {
  const shouldShowContactButtons = phone || whatsapp || email;
  return (
    shouldShowContactButtons && (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={triggerConfig.variant}
            className={triggerConfig.className}
          >
            <MessageSquare size={16} />
            Entre em contato
          </Button>
        </DialogTrigger>
        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>Contatos</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <ContactButtons phone={phone} whatsapp={whatsapp} email={email} />
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}
