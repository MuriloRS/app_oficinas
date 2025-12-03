"use client";

import Pagination from "@/components/Pagination/Pagination";
import { OrderBy } from "@/lib/supabase/db";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import SearchMechanicsActions from "../SearchMechanicsActions/SearchMechanicsActions";
import MechanicCard from "./MechanicCard/MechanicCard";
import styles from "./MechanicsList.module.css";
import { MechanicsFilters, ViewMode } from "./MechanicsList.type";
import useMechanicsList from "./UseMechanicstList/useMechanicsList";

export default function MechanicsList() {
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState<OrderBy>(OrderBy.Relevance);
  const [activeFilters, setActiveFilters] = useState<MechanicsFilters>({});

  useEffect(() => {
    const servicoParam = searchParams.get("servico");

    if (servicoParam) {
      setActiveFilters((prevFilters) => ({
        ...prevFilters,
        services: [{ value: servicoParam, name: servicoParam }],
      }));
    }
  }, [searchParams]);

  const {
    data: { mechanicsList, totalResults },
    states: {
      isPending,
      error,
      openMobileFilter,
      viewMode,
      currentPage,
      totalPages,
    },
    handlers: { setViewMode, setOpenMobileFilter, handlePageChange },
  } = useMechanicsList({ filters: activeFilters, sortBy });

  const isReady = !isPending && !error;
  const hasResults = totalResults > 0;
  const shouldShowList = viewMode === ViewMode.List && hasResults;
  const shouldShowActions = isReady && hasResults;
  const shouldShowNoResults = isReady && !hasResults;

  return (
    <>
      <Filter
        openMobileFilter={openMobileFilter}
        setOpenMobileFilter={setOpenMobileFilter}
        activeFilters={activeFilters}
        onFilterApply={setActiveFilters}
      />
      <div className={styles.resultsSection}>
        {shouldShowActions && (
          <SearchMechanicsActions
            viewMode={viewMode}
            setViewMode={setViewMode}
            setOpenMobileFilter={setOpenMobileFilter}
            mechanicsFoundLength={totalResults}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        )}

        {error && (
          <div className={styles.errorMessage}>
            Erro ao carregar oficinas. Por favor, tente novamente.
          </div>
        )}
        {shouldShowNoResults && <div>Não encontramos nenhuma oficina.</div>}
        {isPending && <div>Procurando oficinas...</div>}

        {/*viewMode === ViewMode.Map && (
          <GoogleMaps
            mechanics={mechanicsList}
            onMechanicSelect={handleMechanicSelect}
          />
        )*/}

        {shouldShowList && (
          <>
            {mechanicsList.map((mechanic) => (
              <MechanicCard key={mechanic.id} mechanic={mechanic} />
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={10}
              totalItems={totalResults}
            />
          </>
        )}
      </div>
    </>
  );
}
