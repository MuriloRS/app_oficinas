import { Mechanic } from "@/features/SearchMechanics/MechanicsList/MechanicsList.type";

type MechanicDetail = Mechanic & {
  openingHours: string[] | null;
};

export const mapOpeningHoursToRecord = (
  openingHours: string | null
): Record<string, string> | null => {
  if (!openingHours) return null;

  const weekDays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  const organizedHours: Record<string, string> = {};

  weekDays.forEach((dayName) => {
    const dayPattern = new RegExp(
      `${dayName}:\\s*(.+?)(?=\\s*(?:segunda-feira|terça-feira|quarta-feira|quinta-feira|sexta-feira|sábado|domingo):|$)`,
      "i"
    );
    const match = openingHours.match(dayPattern);

    if (match && match[1]) {
      const hours = match[1]
        .trim()
        .replace(/,\s*$/, "")
        .replace(/^\s*,\s*/, "");
      organizedHours[dayName] = hours;
    } else {
      organizedHours[dayName] = "Horário não informado";
    }
  });

  return organizedHours;
};

export const mapperMechanicDetail = (mechanic: Mechanic): MechanicDetail => {
  return {
    ...mechanic,
    openingHours: mapOpeningHoursToRecord(mechanic.opening_hours),
  } as MechanicDetail;
};
