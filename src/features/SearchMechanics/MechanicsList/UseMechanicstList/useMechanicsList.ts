import { FilterCondition, getAll } from "@/lib/supabase/db";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Mechanic,
  MechanicsFilters,
  UseMechanicsListProps,
  ViewMode,
} from "../MechanicsList.type";

const ITEMS_PER_PAGE = 10;

const buildFilterConditions = (
  filters?: MechanicsFilters
): FilterCondition[] => {
  if (!filters) return [];

  const conditions: FilterCondition[] = [];

  if (filters.textSearch?.trim()) {
    conditions.push({
      field: "textSearch",
      operator: "text_search",
      value: filters.textSearch,
      searchFields: ["name", "address", "description", "mechanic_type"],
    });
  }

  if (filters.mechanicName?.trim()) {
    conditions.push({
      field: "name",
      operator: "ilike",
      value: filters.mechanicName,
    });
  }

  if (filters.rating) {
    conditions.push({
      field: "rating",
      operator: "gte",
      value: filters.rating,
    });
  }

  if (filters.neighborhood?.length) {
    const firstNeighborhood = filters.neighborhood[0];
    if (firstNeighborhood) {
      conditions.push({
        field: "address",
        operator: "ilike",
        value: firstNeighborhood.value,
      });
    }
  }

  if (filters.services?.length) {
    const serviceValues = filters.services.map((s) => s.value);
    conditions.push({
      field: "services",
      operator: "or_ilike",
      value: serviceValues,
    });
  }

  return conditions;
};

export default function useMechanicsList({
  filters,
  sortBy,
}: UseMechanicsListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.List);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const [selectedMechanic, setSelectedMechanic] = useState<Mechanic | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  const filterConditions = useMemo(
    () => buildFilterConditions(filters),
    [filters]
  );

  const {
    isPending,
    error,
    data: mechanicsList,
  } = useQuery({
    queryKey: ["mechanicsListData", filterConditions, sortBy],
    staleTime: 0,
    refetchOnWindowFocus: false,
    queryFn: () =>
      getAll<Mechanic>({
        table: "mechanics",
        options: {
          orderBy: sortBy,
          filters: filterConditions,
        },
      }),
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [filterConditions, sortBy]);

  const paginatedData = useMemo(() => {
    if (!mechanicsList?.length) return { mechanics: [], totalPages: 0 };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const mechanics = mechanicsList.slice(startIndex, endIndex);
    const totalPages = Math.ceil(mechanicsList.length / ITEMS_PER_PAGE);

    return { mechanics, totalPages };
  }, [mechanicsList, currentPage]);

  const hasResults = useMemo(() => {
    return mechanicsList && mechanicsList.length > 0;
  }, [mechanicsList]);

  const totalResults = useMemo(() => {
    return mechanicsList?.length || 0;
  }, [mechanicsList]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleMechanicSelect = useCallback((mechanic: Mechanic) => {
    setSelectedMechanic(mechanic);
  }, []);

  return {
    data: {
      mechanicsList: paginatedData.mechanics,
      hasResults,
      totalResults,
    },
    states: {
      isPending,
      error,
      openMobileFilter,
      viewMode,
      selectedMechanic,
      currentPage,
      totalPages: paginatedData.totalPages,
    },
    handlers: {
      handleMechanicSelect,
      setViewMode,
      setOpenMobileFilter,
      handlePageChange,
    },
  };
}
