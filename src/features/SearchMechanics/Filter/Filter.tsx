"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { MechanicServicesEnum } from "@/constants/MechanicServicesConstants";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import styles from "./Filter.module.css";
import { FilterProps } from "./Filter.types";
import NeighborSelect from "./NeighborSelect/NeighborSelect";
import Rating from "./Rating/Rating";
import ServicesSelect from "./ServicesSelect/ServicesSelect";
import useFilter from "./useFilter";

export default function Filter({
  openMobileFilter,
  setOpenMobileFilter,
  activeFilters,
  onFilterApply,
}: FilterProps) {
  const {
    handlers: { handleClearFilters, submitForm, setValue },
    states: { errors, isSubmitting, watchedValues },
    register,
  } = useFilter(onFilterApply);

  useEffect(() => {
    if (activeFilters.services) {
      setValue(
        "services",
        activeFilters.services.map((service) => ({
          value: service.value as MechanicServicesEnum,
          name: service.name,
        }))
      );
    }
  }, [activeFilters, setValue]);

  const ClearFiltersButton = (
    <Button
      variant={"ghost"}
      className={styles.clearButton}
      onClick={handleClearFilters}
    >
      <Trash2 size={16} className={styles.clearButtonIcon} />
      Limpar tudo
    </Button>
  );

  const FilterFields = (
    <>
      {/*<div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Do que você precisa?</label>
        <Input
          type="text"
          placeholder="Estou com um problema no câmbio..."
          {...register("textSearch")}
          className={errors.textSearch ? styles.inputError : ""}
        />
        {errors.textSearch && (
          <span className={styles.errorMessage}>
            {errors.textSearch.message}
          </span>
        )}
      </div>*/}

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Avaliação</label>
        <Rating
          value={watchedValues.rating}
          onChange={(rating) => setValue("rating", rating)}
        />
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Tipo de oficina</label>
        <ServicesSelect
          selectedService={watchedValues.services}
          onServiceSelect={(services) => setValue("services", services)}
        />
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Bairro</label>
        <NeighborSelect
          value={watchedValues.neighborhood}
          onChange={(neighborhood) => setValue("neighborhood", neighborhood)}
        />
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Nome da oficina</label>
        <Input
          type="text"
          placeholder="Nome da oficina..."
          {...register("mechanicName")}
          className={
            errors.mechanicName ? styles.inputError : styles.mechanicNameInput
          }
        />
        {errors.mechanicName && (
          <span className={styles.errorMessage}>
            {errors.mechanicName.message}
          </span>
        )}
      </div>
    </>
  );

  const FilterActions = (
    <div className={styles.formActions}>
      <Button
        size={"sm"}
        className={styles.submitButton}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Buscando..." : "Filtrar"}
      </Button>
    </div>
  );

  const FilterForm = (
    <form onSubmit={submitForm} className={styles.filterForm}>
      {FilterFields}
      {FilterActions}
    </form>
  );

  return (
    <>
      <Drawer
        open={openMobileFilter}
        onClose={() => setOpenMobileFilter(false)}
      >
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Escolha os filtros</DrawerTitle>
            {ClearFiltersButton}
          </DrawerHeader>
          <div className={styles.drawerFilterForm}>{FilterForm}</div>
        </DrawerContent>
      </Drawer>
      <div className={`${styles.desktopFilter} ${styles.sidebar}`}>
        <div className={styles.filtersSection}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.sectionTitle}>{ClearFiltersButton}</h2>
          </div>

          <form onSubmit={submitForm} className={styles.filterForm}>
            <div className={styles.scrollableFields}>{FilterFields}</div>
            {FilterActions}
          </form>
        </div>
      </div>
    </>
  );
}
