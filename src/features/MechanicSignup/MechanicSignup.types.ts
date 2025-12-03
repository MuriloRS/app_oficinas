import { TipoDeOficina } from "@/constants/MechanicServicesConstants";
import { Option } from "../SearchMechanics/Filter/ServicesSelect/ServicesSelect.type";

export interface MechanicFormData {
  nomeOficina: string;
  cnpj: string;
  email: string;
  telefone: string;
  whatsapp: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  senha: string;
  confirmaSenha: string;
  listaDeServicos: string[];
  mechanicType: TipoDeOficina;
  fotos: File[];
  horarioAtendimento: {
    segunda: { inicio: string; fim: string; aberto: boolean };
    terca: { inicio: string; fim: string; aberto: boolean };
    quarta: { inicio: string; fim: string; aberto: boolean };
    quinta: { inicio: string; fim: string; aberto: boolean };
    sexta: { inicio: string; fim: string; aberto: boolean };
    sabado: { inicio: string; fim: string; aberto: boolean };
    domingo: { inicio: string; fim: string; aberto: boolean };
  };
  descricao: string;
}

export type BasicStepFormComponentType = {
  formData: MechanicFormData;
  updateFormData: UpdateFormDataType;
};

export type UpdateFormDataType = (
  field: keyof MechanicFormData,
  value: UpdateFormDataValueType
) => void;

export type UpdateFormDataValueType =
  | string
  | boolean
  | TipoDeOficina
  | Option[]
  | File[]
  | MechanicFormData["horarioAtendimento"];
