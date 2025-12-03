import { Service } from "@/constants/MechanicServicesConstants";

export interface Option {
  value: string;
  label: string;
}

export interface ServicesSelectProps {
  value?: Option[];
  onChange?: (value: Option[]) => void;
}

export interface ServiceSelectorProps {
  selectedService?: Service[];
  onServiceSelect?: (service: Service[]) => void;
}
