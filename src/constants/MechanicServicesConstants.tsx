import {
  Battery,
  BatteryCharging,
  Bike,
  Car,
  CarFront,
  Circle,
  ClipboardCheck,
  Cog,
  Cpu,
  Droplets,
  Fuel,
  Hammer,
  Package,
  Palette,
  Settings,
  Shield,
  Sparkles,
  Target,
  Thermometer,
  Truck,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

export interface Service {
  value: MechanicServicesEnum;
  name: string;
}

export enum MechanicServicesEnum {
  MecanicaGeral = "Mecânica geral",
  AutoEletrica = "Autoelétrica",
  SuspensaoDirecao = "Suspensão e direção",
  BorrachariaPneus = "Borracharia e pneus",
  SomAutomotivo = "Som automotivo",
  AutoCenter = "Autocenter",
  AutoVidros = "Autovidros",
  OficinaDeMotocicletas = "Oficina de motocicletas",
  OficinaDeCarrosEletricosEHibridos = "Oficina de carros elétricos e híbridos",
  OficinaDeCarrosADiesel = "Oficina de carros a diesel",
  InjecaoEletronica = "Injeção eletrônica",
  TransmissaoECambioAutomatico = "Transmissão e câmbio automático",
  OficinaDeCaminhoesEVeiculosPesados = "Oficina de caminhões e veículos pesados",
  MartelinhoDeOuro = "Martelinho de ouro",
  ArCondicionadoAutomotivo = "Ar-condicionado automotivo",
  AlinhamentoEBalanceamento = "Alinhamento e balanceamento",
  FunilariaPinturaChapeamento = "Funilaria, pintura e chapeamento",
  EsteticaAutomotiva = "Estética automotiva",
  LavaRapido = "Lava-rápido",
  Autopecas = "Autopeças",
  AutopecasCaminhoes = "Autopeças para caminhões",
  PostoCombustivel = "Posto de combustível",
  Polimento = "Polimento",
  VendaCarros = "Venda de carros",
  VendaMotos = "Venda de motos",
  InspecaoVeicular = "Inspeção veicular",
  Radiadores = "Radiadores",
  Baterias = "Baterias",
  TrocaDeOleo = "Troca de óleo",
  AluguelCarros = "Aluguel de carros",
}

export const MechanicsServicesList: Service[] = [
  { value: MechanicServicesEnum.MecanicaGeral, name: "Mecânica Geral" },
  { value: MechanicServicesEnum.AutoEletrica, name: "Autoelétrica" },
  { value: MechanicServicesEnum.SuspensaoDirecao, name: "Suspensão e Direção" },
  { value: MechanicServicesEnum.BorrachariaPneus, name: "Borracharia e Pneus" },
  {
    value: MechanicServicesEnum.EsteticaAutomotiva,
    name: "Estética automotiva",
  },
  { value: MechanicServicesEnum.SomAutomotivo, name: "Som automotivo" },
  { value: MechanicServicesEnum.AutoCenter, name: "Autocenter" },
  { value: MechanicServicesEnum.AutoVidros, name: "Autovidros" },
  {
    value: MechanicServicesEnum.OficinaDeMotocicletas,
    name: "Oficina de motocicletas",
  },
  {
    value: MechanicServicesEnum.OficinaDeCarrosEletricosEHibridos,
    name: "Oficina de carros elétricos e hibridos",
  },
  {
    value: MechanicServicesEnum.OficinaDeCarrosADiesel,
    name: "Oficina de carros a diesel",
  },
  { value: MechanicServicesEnum.LavaRapido, name: "Lava rápido" },
  { value: MechanicServicesEnum.InjecaoEletronica, name: "Injeção eletrônica" },
  {
    value: MechanicServicesEnum.TransmissaoECambioAutomatico,
    name: "Transmissão e câmbio automático",
  },
  {
    value: MechanicServicesEnum.OficinaDeCaminhoesEVeiculosPesados,
    name: "Oficina de caminhões e veículos pesados",
  },
  { value: MechanicServicesEnum.MartelinhoDeOuro, name: "Martelinho de ouro" },
  {
    value: MechanicServicesEnum.ArCondicionadoAutomotivo,
    name: "Ar-condicionado automotivo",
  },
  {
    value: MechanicServicesEnum.AlinhamentoEBalanceamento,
    name: "Alinhamento e Balanceamento",
  },
  {
    value: MechanicServicesEnum.FunilariaPinturaChapeamento,
    name: "Funilaria Pintura Chapeamento",
  },
  { value: MechanicServicesEnum.Autopecas, name: "Autopeças" },
  {
    value: MechanicServicesEnum.AutopecasCaminhoes,
    name: "Autopeças de caminhões",
  },
  {
    value: MechanicServicesEnum.PostoCombustivel,
    name: "Posto de combustível",
  },
  { value: MechanicServicesEnum.Polimento, name: "Polimento" },
  { value: MechanicServicesEnum.VendaCarros, name: "Venda de carros" },
  { value: MechanicServicesEnum.VendaMotos, name: "Venda de motos" },
  { value: MechanicServicesEnum.InspecaoVeicular, name: "Inspeção veicular" },
  { value: MechanicServicesEnum.Radiadores, name: "Radiadores" },
  { value: MechanicServicesEnum.Baterias, name: "Baterias" },
  { value: MechanicServicesEnum.TrocaDeOleo, name: "Troca de Oleo" },
  { value: MechanicServicesEnum.AluguelCarros, name: "Aluguel de carros" },
];

export const ServicesIcons: Partial<
  Record<MechanicServicesEnum, React.ReactNode>
> = {
  [MechanicServicesEnum.MecanicaGeral]: <Wrench />,
  [MechanicServicesEnum.AutoEletrica]: <Zap />,
  [MechanicServicesEnum.SuspensaoDirecao]: <Car />,
  [MechanicServicesEnum.BorrachariaPneus]: <Circle />,
  [MechanicServicesEnum.EsteticaAutomotiva]: <Sparkles />,
  [MechanicServicesEnum.SomAutomotivo]: <Car />,
  [MechanicServicesEnum.AutoCenter]: <Settings />,
  [MechanicServicesEnum.AutoVidros]: <Shield />,
  [MechanicServicesEnum.OficinaDeMotocicletas]: <Bike />,
  [MechanicServicesEnum.OficinaDeCarrosEletricosEHibridos]: <Battery />,
  [MechanicServicesEnum.OficinaDeCarrosADiesel]: <Fuel />,
  [MechanicServicesEnum.LavaRapido]: <Droplets />,
  [MechanicServicesEnum.InjecaoEletronica]: <Cpu />,
  [MechanicServicesEnum.TransmissaoECambioAutomatico]: <Cog />,
  [MechanicServicesEnum.OficinaDeCaminhoesEVeiculosPesados]: <Truck />,
  [MechanicServicesEnum.MartelinhoDeOuro]: <Hammer />,
  [MechanicServicesEnum.ArCondicionadoAutomotivo]: <Wind />,
  [MechanicServicesEnum.AlinhamentoEBalanceamento]: <Target />,
  [MechanicServicesEnum.FunilariaPinturaChapeamento]: <Palette />,
  [MechanicServicesEnum.Autopecas]: <Package />,
  [MechanicServicesEnum.AutopecasCaminhoes]: <Truck />,
  [MechanicServicesEnum.PostoCombustivel]: <Fuel />,
  [MechanicServicesEnum.Polimento]: <Sparkles />,
  [MechanicServicesEnum.VendaCarros]: <Car />,
  [MechanicServicesEnum.VendaMotos]: <Bike />,
  [MechanicServicesEnum.InspecaoVeicular]: <ClipboardCheck />,
  [MechanicServicesEnum.Radiadores]: <Thermometer />,
  [MechanicServicesEnum.Baterias]: <BatteryCharging />,
  [MechanicServicesEnum.TrocaDeOleo]: <Droplets />,
  [MechanicServicesEnum.AluguelCarros]: <CarFront />,
};

export function getServiceDescription(service: MechanicServicesEnum): string {
  return MechanicsServicesList.find((s) => s.value === service)?.name || "";
}

export const ServicesDescriptions: Record<MechanicServicesEnum, string> = {
  [MechanicServicesEnum.MecanicaGeral]:
    "Serviços completos de mecânica, incluindo reparos em motor, freios, suspensão e manutenções preventivas.",
  [MechanicServicesEnum.AutoEletrica]:
    "Serviços elétricos em geral para seu carro, troca de lâmpada do farol, baterias, alternador, sistema de partida e diagnóstico de problemas elétricos.",
  [MechanicServicesEnum.SuspensaoDirecao]:
    "Manutenção e reparo de suspensão, direção hidráulica e elétrica, troca de amortecedores e alinhamento de direção.",
  [MechanicServicesEnum.BorrachariaPneus]:
    "Conserto de pneus, venda de pneus novos e seminovos, montagem, balanceamento e alinhamento de rodas.",
  [MechanicServicesEnum.EsteticaAutomotiva]:
    "Polimento, cristalização, higienização interna, lavagem detalhada e proteção de pintura profissional.",
  [MechanicServicesEnum.SomAutomotivo]:
    "Instalação de sistemas de som, multimídia, alarmes, sensores de estacionamento e acessórios eletrônicos.",
  [MechanicServicesEnum.AutoCenter]:
    "Centro automotivo completo com diversos serviços, desde manutenções básicas até reparos complexos.",
  [MechanicServicesEnum.AutoVidros]:
    "Instalação, reparo e substituição de vidros automotivos, incluindo para-brisas, vidros laterais e traseiros.",
  [MechanicServicesEnum.OficinaDeMotocicletas]:
    "Oficina especializada em motocicletas, com manutenção, reparo e customização de motos de todos os tipos.",
  [MechanicServicesEnum.OficinaDeCarrosEletricosEHibridos]:
    "Oficina especializada em veículos elétricos e híbridos, com diagnóstico e manutenção de baterias e sistemas elétricos.",
  [MechanicServicesEnum.OficinaDeCarrosADiesel]:
    "Especializada em veículos a diesel, com serviços de bomba injetora, bicos injetores e sistema de injeção diesel.",
  [MechanicServicesEnum.LavaRapido]:
    "Lavagem completa externa e interna do veículo com produtos de qualidade e acabamento impecável.",
  [MechanicServicesEnum.InjecaoEletronica]:
    "Diagnóstico e reparo de sistemas de injeção eletrônica, limpeza de bicos injetores e reprogramação de módulos.",
  [MechanicServicesEnum.TransmissaoECambioAutomatico]:
    "Especializada em transmissão automática, CVT e câmbio manual, com diagnóstico, reparo e manutenção preventiva.",
  [MechanicServicesEnum.OficinaDeCaminhoesEVeiculosPesados]:
    "Oficina especializada em caminhões, ônibus e veículos pesados, com manutenção e reparos de grande porte.",
  [MechanicServicesEnum.MartelinhoDeOuro]:
    "Remoção de amassados sem pintura, preservando a originalidade da pintura de fábrica do veículo.",
  [MechanicServicesEnum.ArCondicionadoAutomotivo]:
    "Manutenção, recarga de gás, limpeza do sistema e reparo do ar-condicionado automotivo.",
  [MechanicServicesEnum.AlinhamentoEBalanceamento]:
    "Serviço de alinhamento de direção e balanceamento de rodas para maior conforto, segurança e economia de pneus.",
  [MechanicServicesEnum.FunilariaPinturaChapeamento]:
    "Serviços de funilaria, pintura automotiva, reparo de lataria e chapeamento de qualidade.",
  [MechanicServicesEnum.Autopecas]:
    "Venda de peças automotivas originais e paralelas, com entrega rápida e garantia.",
  [MechanicServicesEnum.AutopecasCaminhoes]:
    "Peças específicas para caminhões e veículos pesados, com estoque variado e atendimento especializado.",
  [MechanicServicesEnum.PostoCombustivel]:
    "Abastecimento de combustível, troca de óleo rápida, calibragem de pneus e serviços de conveniência.",
  [MechanicServicesEnum.Polimento]:
    "Polimento profissional para restauração e proteção da pintura, removendo manchas, riscos e oxidação.",
  [MechanicServicesEnum.VendaCarros]:
    "Compra e venda de veículos novos e seminovos, com financiamento e garantia.",
  [MechanicServicesEnum.VendaMotos]:
    "Compra e venda de motocicletas novas e usadas, com financiamento e documentação completa.",
  [MechanicServicesEnum.InspecaoVeicular]:
    "Inspeção técnica veicular obrigatória, avaliação do estado do veículo e emissão de certificados.",
  [MechanicServicesEnum.Radiadores]:
    "Manutenção, limpeza, reparo e troca de radiadores, incluindo teste de vazamentos e sistema de arrefecimento.",
  [MechanicServicesEnum.Baterias]:
    "Venda, instalação e teste de baterias automotivas de diversas marcas e amperagens.",
  [MechanicServicesEnum.TrocaDeOleo]:
    "Troca de óleo do motor com filtros de qualidade, lubrificantes recomendados pelo fabricante e revisão completa.",
  [MechanicServicesEnum.AluguelCarros]:
    "Locação de veículos para uso diário, mensal ou para viagens, com seguros e assistência 24 horas.",
};
