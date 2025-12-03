import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MechanicServicesType,
  TipoDeOficina,
} from "@/constants/MechanicServicesConstants";
import dynamic from "next/dynamic";
import { useState } from "react";
import { diasSemana } from "../MechanicSignup.constants";
import { BasicStepFormComponentType } from "../MechanicSignup.types";

const Select = dynamic(() => import("react-select"), { ssr: false });

export function ServicesStep({
  formData,
  updateFormData,
}: BasicStepFormComponentType) {
  const [selectedOptions, setSelectedOptions] = useState<TipoDeOficina>(
    formData.mechanicType
  );

  const handleChange = (changedValue: unknown) => {
    const mechanicType = changedValue as TipoDeOficina;
    setSelectedOptions(mechanicType);
    updateFormData("mechanicType", mechanicType);
  };

  const updateHorario = (
    dia: string,
    field: string,
    value: string | boolean
  ) => {
    const diaKey = dia as keyof typeof formData.horarioAtendimento;
    const currentDay = formData.horarioAtendimento[diaKey];
    const updatedDay = {
      ...currentDay,
      [field]: value,
    } as typeof currentDay;

    const updatedHorario = {
      ...formData.horarioAtendimento,
      [diaKey]: updatedDay,
    };

    updateFormData("horarioAtendimento", updatedHorario);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Serviços e Horários</h2>
      <p className="text-gray-600">
        Defina os serviços oferecidos e horários de atendimento.
      </p>

      <div>
        <Label>Tipo de Oficina *</Label>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-2">
          <Select
            onChange={handleChange}
            value={selectedOptions}
            options={MechanicServicesType}
            isMulti={false}
            placeholder="Selecione o tipo de oficina"
          />
        </div>
      </div>

      <div>
        <Label>Horário de Atendimento</Label>
        <div className="space-y-3 mt-2">
          {diasSemana.map(({ key, label }) => (
            <div
              key={key}
              className="flex items-center space-x-4 p-3 border rounded-lg"
            >
              <label className="flex items-center space-x-2 min-w-[140px]">
                <input
                  type="checkbox"
                  checked={
                    formData.horarioAtendimento[
                      key as keyof typeof formData.horarioAtendimento
                    ].aberto
                  }
                  onChange={(e) =>
                    updateHorario(key, "aberto", e.target.checked)
                  }
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm font-medium">{label}</span>
              </label>

              {formData.horarioAtendimento[
                key as keyof typeof formData.horarioAtendimento
              ].aberto && (
                <>
                  <Input
                    type="time"
                    value={
                      formData.horarioAtendimento[
                        key as keyof typeof formData.horarioAtendimento
                      ].inicio
                    }
                    onChange={(e) =>
                      updateHorario(key, "inicio", e.target.value)
                    }
                    className="w-24"
                  />
                  <span className="text-gray-500">até</span>
                  <Input
                    type="time"
                    value={
                      formData.horarioAtendimento[
                        key as keyof typeof formData.horarioAtendimento
                      ].fim
                    }
                    onChange={(e) => updateHorario(key, "fim", e.target.value)}
                    className="w-24"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
