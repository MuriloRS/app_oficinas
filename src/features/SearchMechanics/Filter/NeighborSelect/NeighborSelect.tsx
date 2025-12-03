"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./../Filter.module.css";
import {
  LocationStateType,
  NeighborSelectProps,
  Option,
} from "./NeighborSelect.types";

const Select = dynamic(() => import("react-select"), { ssr: false });

const options: Option[] = [
  { value: "alianca", label: "Aliança" },
  { value: "ana_nery", label: "Ana Nery" },
  { value: "arroio_grande", label: "Arroio Grande" },
  { value: "avenida", label: "Avenida" },
  { value: "belvedere", label: "Belvedere" },
  { value: "bom_jesus", label: "Bom Jesus" },
  { value: "bonfim", label: "Bonfim" },
  { value: "castelo_branco", label: "Castelo Branco" },
  { value: "centro", label: "Centro" },
  { value: "country", label: "Country" },
  { value: "do_parque", label: "do Parque" },
  { value: "dona_carlota", label: "Dona Carlota" },
  { value: "esmeralda", label: "Esmeralda" },
  { value: "faxinal_menino_deus", label: "Faxinal Menino Deus" },
  { value: "germania", label: "Germânia" },
  { value: "goias", label: "Goiás" },
  { value: "higienopolis", label: "Higienópolis" },
  { value: "independencia", label: "Independência" },
  { value: "jardim_europa", label: "Jardim Europa" },
  { value: "joao_alves", label: "João Alves" },
  { value: "linha_santa_cruz", label: "Linha Santa Cruz" },
  { value: "margarida", label: "Margarida" },
  { value: "monte_verde", label: "Monte Verde" },
  { value: "pedreira", label: "Pedreira" },
  { value: "progresso", label: "Progresso" },
  { value: "rauber", label: "Rauber" },
  { value: "renascenca", label: "Renascença" },
  { value: "santa_vitoria", label: "Santa Vitória" },
  { value: "santo_antonio", label: "Santo Antônio" },
  { value: "santo_inacio", label: "Santo Inácio" },
  { value: "santuario", label: "Santuário" },
  { value: "sao_joao", label: "São João" },
  { value: "schulz", label: "Schulz" },
  { value: "senai", label: "Senai" },
  { value: "universitario", label: "Universitário" },
  { value: "varzea", label: "Várzea" },
];

export default function NeighborSelect({
  value,
  onChange,
}: NeighborSelectProps) {
  const [_location, setLocation] = useState<LocationStateType>(null);
  const [_error, setError] = useState<string | null>();
  const [selectedOptions, setSelectedOptions] = useState<Option[] | undefined>(
    value
  );

  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const handleChange = (selectedOptions: unknown) => {
    const normalized = (selectedOptions ?? []) as readonly Option[];
    const newValue = [...normalized];
    onChange?.(newValue);
  };

  return (
    <>
      <div className={styles.locationFilter}>
        <Select
          onChange={handleChange}
          value={selectedOptions}
          options={options}
          isMulti={true}
          placeholder="Selecione o bairro"
          className={styles.locationSelect}
        />
      </div>
    </>
  );
}
