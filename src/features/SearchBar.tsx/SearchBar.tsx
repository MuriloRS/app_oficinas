"use client";
import { ServicesIcons } from "@/constants/MechanicServicesConstants";
import { Clock, MapPin, Search, Wrench, X } from "lucide-react";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";
import useSearchBar from "./useSearchBar";

export default function SearchBar({
  selectedBadge,
  setSelectedBadge,
}: SearchBarProps) {
  const {
    refs: { searchRef, inputRef },
    handlers: {
      removeRecentSearch,
      handleInputChange,
      handleWorkshopClick,
      handleServiceClick,
      handleRecentSearchClick,
      handleOpenDropdown,
      clearSearch,
    },
    states: {
      query,
      isOpen,
      recentSearches,
      filteredWorkshops,
      matchingServices,
      isSearching,
    },
  } = useSearchBar({
    selectedBadge,
    setSelectedBadge,
  });

  return (
    <div ref={searchRef} className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.leftIcon}>
          <Search className={`${styles.iconMedium} ${styles.textGray400}`} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleOpenDropdown}
          placeholder="Buscar por oficina ou tipo de serviço..."
          className={styles.input}
        />

        {query && (
          <button onClick={clearSearch} className={styles.clearButton}>
            <X className={styles.iconMedium} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {query.length < 2 && recentSearches.length > 0 && (
            <div className={`${styles.section} ${styles.sectionBorder}`}>
              <h3 className={styles.sectionTitle}>
                <Clock className={`${styles.mr2} ${styles.iconSmall}`} />
                Pesquisas Recentes
              </h3>
              <div className={styles.spaceY1}>
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className={styles.groupRow}
                  >
                    <div className={styles.rowLeft}>
                      <span className={styles.recentText}>{search}</span>
                    </div>
                    <button
                      onClick={(e) => removeRecentSearch(search, e)}
                      className={styles.removeRecentButton}
                    >
                      <X
                        className={`${styles.iconTiny} ${styles.textGray400}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query.length >= 2 && (
            <>
              {isSearching && (
                <div className={styles.emptyState}>
                  <div className={styles.loadingSpinner} />
                  <p className={styles.emptyText}>Buscando oficinas...</p>
                </div>
              )}

              {/* services section */}
              {!isSearching && matchingServices.length > 0 && (
                <div className={`${styles.section} ${styles.sectionBorder}`}>
                  <h3 className={styles.sectionTitle}>
                    <Wrench className={`${styles.mr2} ${styles.iconSmall}`} />
                    Serviços
                  </h3>
                  <div className={styles.spaceY1}>
                    {matchingServices.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => handleServiceClick(service.name)}
                        className={styles.serviceRow}
                      >
                        {ServicesIcons[service.value]}
                        <span className={styles.serviceText}>
                          {service.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* mechanics section */}
              {!isSearching && filteredWorkshops.length > 0 && (
                <div className={styles.workshopsSection}>
                  <h3 className={styles.sectionTitle}>
                    <MapPin className={`${styles.mr2} ${styles.iconSmall}`} />
                    Oficinas
                  </h3>
                  <div className={styles.spaceY2}>
                    {filteredWorkshops.map((workshop) => (
                      <div
                        key={workshop.id}
                        onClick={() => handleWorkshopClick(workshop)}
                        className={styles.workshopCard}
                      >
                        <div className={styles.workshopInner}>
                          <div className={styles.flex1MinW0}>
                            <h4 className={styles.workshopTitle}>
                              {workshop.name}
                            </h4>
                            <p className={styles.workshopAddress}>
                              {workshop.address}
                            </p>
                            <div className={styles.tagContainer}>
                              {workshop.services
                                .split(",")
                                .map((service, idx) => (
                                  <span key={idx} className={styles.tag}>
                                    {service}
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!isSearching &&
                filteredWorkshops.length === 0 &&
                matchingServices.length === 0 && (
                  <div className={styles.emptyState}>
                    <Search
                      className={`${styles.iconXL} ${styles.iconGray} ${styles.centerMb3}`}
                    />
                    <p className={styles.emptyText}>
                      Nenhum resultado encontrado para &quot;{query}&quot;
                    </p>
                    <p className={styles.emptySubtext}>
                      Tente buscar por outro termo
                    </p>
                  </div>
                )}
            </>
          )}

          {query.length < 2 && recentSearches.length === 0 && (
            <div className={styles.emptyState}>
              <Search
                className={`${styles.iconXL} ${styles.iconGray} ${styles.centerMb3}`}
              />
              <p className={styles.emptyText}>Digite um serviço para buscar.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
