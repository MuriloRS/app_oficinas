import TalkToSpecialist from "@/components/Buttons/TalkToSpecialist/TalkToSpecialist";
import {
  AlertTriangle,
  Battery,
  Circle,
  Clock,
  Droplets,
  Gauge,
  Settings,
  Sparkles,
  Thermometer,
  Wrench,
} from "lucide-react";
import React from "react";

interface Service {
  id: string;
  name: string;
  description: string;
  frequency: string;
  importance: "high" | "medium" | "low";
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "maintenance",
    name: "Manutenção Preventiva",
    description:
      "Serviços essenciais para manter seu veículo funcionando perfeitamente",
    icon: <Wrench className="w-6 h-6" />,
    services: [
      {
        id: "oil-change",
        name: "Troca de Óleo",
        description:
          "Substituição do óleo do motor e filtro para garantir lubrificação adequada e prolongar a vida útil do motor.",
        frequency: "A cada 5.000 - 10.000 km",
        importance: "high",
        icon: <Droplets className="w-5 h-5" />,
      },
      {
        id: "air-filter",
        name: "Troca de Filtro de Ar",
        description:
          "Substituição do filtro de ar do motor para manter a qualidade da combustão e eficiência.",
        frequency: "A cada 15.000 - 30.000 km",
        importance: "medium",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        id: "brake-fluid",
        name: "Troca de Fluido de Freio",
        description:
          "Substituição do fluido de freio para manter a eficiência do sistema de frenagem.",
        frequency: "A cada 2 anos ou 40.000 km",
        importance: "high",
        icon: <Gauge className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "engine",
    name: "Sistema do Motor",
    description: "Serviços relacionados ao coração do seu veículo",
    icon: <Settings className="w-6 h-6" />,
    services: [
      {
        id: "spark-plugs",
        name: "Troca de Velas de Ignição",
        description:
          "Substituição das velas para garantir ignição adequada e melhor performance do motor.",
        frequency: "A cada 60.000 - 100.000 km",
        importance: "medium",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        id: "timing-belt",
        name: "Correia Dentada",
        description:
          "Substituição da correia dentada para evitar danos graves ao motor.",
        frequency: "A cada 60.000 - 100.000 km",
        importance: "high",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        id: "fuel-filter",
        name: "Filtro de Combustível",
        description:
          "Substituição do filtro para proteger o sistema de injeção e melhorar a eficiência.",
        frequency: "A cada 40.000 - 80.000 km",
        importance: "medium",
        icon: <Droplets className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "brakes",
    name: "Sistema de Freios",
    description:
      "Segurança em primeiro lugar - mantenha os freios sempre funcionando",
    icon: <Gauge className="w-6 h-6" />,
    services: [
      {
        id: "brake-pads",
        name: "Pastilhas de Freio",
        description:
          "Substituição das pastilhas para manter a eficiência de frenagem e segurança.",
        frequency: "A cada 20.000 - 50.000 km",
        importance: "high",
        icon: <Gauge className="w-5 h-5" />,
      },
      {
        id: "brake-discs",
        name: "Discos de Freio",
        description:
          "Substituição dos discos quando desgastados para garantir frenagem eficiente.",
        frequency: "A cada 60.000 - 100.000 km",
        importance: "high",
        icon: <Gauge className="w-5 h-5" />,
      },
      {
        id: "brake-cables",
        name: "Cabos de Freio",
        description:
          "Verificação e substituição dos cabos para manter o sistema funcionando perfeitamente.",
        frequency: "A cada 2 anos",
        importance: "medium",
        icon: <Gauge className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "electrical",
    name: "Sistema Elétrico",
    description:
      "Manutenção da parte elétrica para evitar problemas de partida e funcionamento",
    icon: <Battery className="w-6 h-6" />,
    services: [
      {
        id: "battery",
        name: "Bateria",
        description:
          "Verificação e substituição da bateria para garantir partida confiável.",
        frequency: "A cada 3-5 anos",
        importance: "high",
        icon: <Battery className="w-5 h-5" />,
      },
      {
        id: "alternator",
        name: "Alternador",
        description:
          "Verificação do alternador para garantir carregamento adequado da bateria.",
        frequency: "A cada 2 anos",
        importance: "medium",
        icon: <Battery className="w-5 h-5" />,
      },
      {
        id: "starter",
        name: "Motor de Partida",
        description:
          "Verificação do motor de partida para garantir funcionamento adequado.",
        frequency: "A cada 2 anos",
        importance: "medium",
        icon: <Battery className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "tires",
    name: "Pneus e Rodas",
    description:
      "Manutenção dos pneus para segurança e economia de combustível",
    icon: <Circle className="w-6 h-6" />,
    services: [
      {
        id: "tire-rotation",
        name: "Rodízio de Pneus",
        description:
          "Troca da posição dos pneus para desgaste uniforme e maior durabilidade.",
        frequency: "A cada 10.000 km",
        importance: "medium",
        icon: <Circle className="w-5 h-5" />,
      },
      {
        id: "wheel-alignment",
        name: "Alinhamento",
        description:
          "Ajuste do alinhamento das rodas para melhor dirigibilidade e economia.",
        frequency: "A cada 20.000 km",
        importance: "medium",
        icon: <Circle className="w-5 h-5" />,
      },
      {
        id: "tire-balancing",
        name: "Balanceamento",
        description:
          "Balanceamento das rodas para eliminar vibrações e desgaste irregular.",
        frequency: "A cada 20.000 km",
        importance: "medium",
        icon: <Circle className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "cooling",
    name: "Sistema de Arrefecimento",
    description:
      "Manutenção do sistema de arrefecimento para evitar superaquecimento",
    icon: <Thermometer className="w-6 h-6" />,
    services: [
      {
        id: "coolant",
        name: "Líquido de Arrefecimento",
        description:
          "Verificação e substituição do líquido para manter temperatura adequada do motor.",
        frequency: "A cada 2 anos ou 40.000 km",
        importance: "high",
        icon: <Thermometer className="w-5 h-5" />,
      },
      {
        id: "thermostat",
        name: "Termostato",
        description:
          "Verificação do termostato para controle adequado da temperatura.",
        frequency: "A cada 2 anos",
        importance: "medium",
        icon: <Thermometer className="w-5 h-5" />,
      },
      {
        id: "water-pump",
        name: "Bomba d'Água",
        description:
          "Verificação da bomba d'água para circulação adequada do líquido.",
        frequency: "A cada 2 anos",
        importance: "medium",
        icon: <Thermometer className="w-5 h-5" />,
      },
    ],
  },
];

const getImportanceColor = (importance: string) => {
  switch (importance) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getImportanceText = (importance: string) => {
  switch (importance) {
    case "high":
      return "Alta";
    case "medium":
      return "Média";
    case "low":
      return "Baixa";
    default:
      return "N/A";
  }
};

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços Automotivos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os principais serviços automotivos e mantenha seu veículo
            sempre em perfeitas condições. Nossa equipe especializada está
            pronta para cuidar de todos os aspectos do seu carro.
          </p>
        </div>

        {/* Tips Section */}
        <div className="mt-8 mb-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Dicas de Manutenção
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ✅ O que fazer:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Siga sempre o manual do proprietário</li>
                <li>• Mantenha um registro de todas as manutenções</li>
                <li>• Use peças de qualidade e óleos recomendados</li>
                <li>• Faça inspeções regulares</li>
                <li>• Conduza de forma responsável</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ❌ O que evitar:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ignorar sinais de problemas</li>
                <li>• Usar combustível de baixa qualidade</li>
                <li>• Exceder os limites de peso do veículo</li>
                <li>• Ignorar ruídos estranhos</li>
                <li>• Adiar manutenções importantes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            *OBS: Essa lista de serviços e tempo é apenas uma estimativa geral
            para veículos, se você quer uma estimativa de tempo para seu
            veículoo em específico, faça o login e cadastre seu veículo para ver
            como fazer a manutenção dele corretamente.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="text-white">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.name}
                    </h2>
                    <p className="text-red-100">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="text-red-600">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {service.description}
                          </p>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">
                                <strong>Frequência:</strong> {service.frequency}
                              </span>
                            </div>

                            <div className="flex items-center space-x-2">
                              <AlertTriangle className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">
                                <strong>Importância:</strong>
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium border ${getImportanceColor(
                                  service.importance
                                )}`}
                              >
                                {getImportanceText(service.importance)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Precisa de um desses serviços?
            </h2>
            <p className="text-red-100 mb-6">
              Entre em contato conosco para agendar uma avaliação ou solicitar
              um orçamento. Nossa equipe está pronta para atender você com
              qualidade e preço justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TalkToSpecialist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
