import { MechanicsFilters } from "../MechanicsList/MechanicsList.type";

export type FilterProps = {
  activeFilters: MechanicsFilters;
  openMobileFilter: boolean;
  setOpenMobileFilter: (open: boolean) => void;
  onFilterApply: (filters: MechanicsFilters) => void;
};
