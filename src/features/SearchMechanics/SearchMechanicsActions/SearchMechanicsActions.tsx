import { Button } from "@/components/ui/button";
import { OrderBy } from "@/lib/supabase/db";
import { ArrowUpDown, Filter, List, Map } from "lucide-react";
import { useCallback, useState } from "react";
import { ViewMode } from "../MechanicsList/MechanicsList.type";
import styles from "./SearchMechanicsActions.module.css";

type SearchMechanicsActionsProps = {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  setOpenMobileFilter: (open: boolean) => void;
  mechanicsFoundLength: number;
  sortBy: OrderBy;
  setSortBy: (sortBy: OrderBy) => void;
};

export default function SearchMechanicsActions({
  viewMode,
  setViewMode,
  setOpenMobileFilter,
  mechanicsFoundLength,
  sortBy,
  setSortBy,
}: SearchMechanicsActionsProps) {
  const [showOrderOptions, setShowOrderOptions] = useState(false);

  const ResultCount = (
    <div className={styles.resultsCount}>
      Oficinas disponíveis
      <span>Encontramos {mechanicsFoundLength} oficinas disponíveis</span>
    </div>
  );

  const MapButton = (className?: string) => (
    <Button
      className={className}
      size="sm"
      variant="ghost"
      onClick={() => setViewMode(ViewMode.Map)}
    >
      <Map />
      <span>Ver mapa</span>
    </Button>
  );

  const ListButton = (className?: string) => (
    <Button
      className={className}
      variant="ghost"
      size="sm"
      onClick={() => setViewMode(ViewMode.List)}
    >
      <List />
      Ver lista
    </Button>
  );

  const handleSortByChange = useCallback(
    (sortBy: OrderBy) => {
      setSortBy(sortBy);
      setShowOrderOptions(false);
    },
    [setSortBy, setShowOrderOptions]
  );

  return (
    <>
      <div className={styles.searchMechanicsActionsDesktop}>
        {mechanicsFoundLength && ResultCount}
        <div className={styles.sortContainer}>
          <select
            className={styles.sortSelect}
            value={sortBy as OrderBy}
            onChange={(e) => setSortBy(e.target.value as OrderBy)}
          >
            <option value={OrderBy.Relevance}>Ordenar por relevância</option>
            <option value={OrderBy.Rating}>Ordenar por avaliação</option>
          </select>
          <div className={styles.viewToggleContainer}>
            {viewMode === ViewMode.Map && ListButton(styles.viewToggleButton)}
            {/*viewMode === ViewMode.List && MapButton(styles.viewToggleButton)}*/}
          </div>
        </div>
      </div>

      <div className={styles.resultsCountMobile}>{ResultCount}</div>

      <div className={styles.searchMechanicsActionsMobile}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenMobileFilter(true)}
        >
          <Filter />
          Filtros
        </Button>
        <div className={styles.orderContainer}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowOrderOptions(!showOrderOptions)}
          >
            <ArrowUpDown />
            {!sortBy && "Ordenar"}
            {sortBy === OrderBy.Relevance && "Relevância"}
            {sortBy === OrderBy.Rating && "Avaliação"}
          </Button>
          {showOrderOptions && (
            <div className={styles.orderMenu}>
              <button
                className={styles.orderItem}
                onClick={() => handleSortByChange(OrderBy.Relevance)}
              >
                Ordenar por relevância
              </button>
              <button
                className={styles.orderItem}
                onClick={() => handleSortByChange(OrderBy.Rating)}
              >
                Ordenar por avaliação
              </button>
            </div>
          )}
        </div>

        {viewMode === ViewMode.Map && ListButton()}
        {viewMode === ViewMode.List && MapButton()}
      </div>
    </>
  );
}
