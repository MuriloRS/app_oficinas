import { MechanicsServicesList } from "@/constants/MechanicServicesConstants";
import { ROUTES } from "@/constants/routes";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Workshop } from "./SearchBar.types";

type UseSearchBarProps = {
  selectedBadge?: string | undefined;
  setSelectedBadge?: (badge: string | undefined) => void;
};

export default function useSearchBar({
  selectedBadge,
  setSelectedBadge,
}: UseSearchBarProps) {
  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
    "recentSearches",
    []
  );

  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const searchWorkshops = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setFilteredWorkshops([]);
      return;
    }

    setIsSearching(true);

    try {
      const { data, error } = await supabase
        .from("mechanics")
        .select("id, name, address, rating, relevance, services")
        .or(`services.ilike.%${searchQuery}%,name.ilike.%${searchQuery}%`)
        .order("relevance", { ascending: false, nullsFirst: false })
        .order("rating", { ascending: false, nullsFirst: false })
        .limit(5);

      if (error) {
        console.error("Error searching workshops:", error);
        setFilteredWorkshops([]);
        return;
      }

      const workshops: Workshop[] = (data || []).map((mechanic) => ({
        id: String(mechanic.id),
        name: mechanic.name || "Sem nome",
        services: mechanic.services || "",
        address: mechanic.address || "Endereço não disponível",
      }));

      setFilteredWorkshops(workshops);
    } catch (error) {
      console.error("Unexpected error searching workshops:", error);
      setFilteredWorkshops([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      searchWorkshops(query);
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, searchWorkshops]);

  const matchingServices = useMemo(
    () =>
      query.length >= 2
        ? MechanicsServicesList.filter((service) =>
            service.name.toLowerCase().includes(query.toLowerCase())
          ).slice(0, 4)
        : [],
    [query]
  );

  useEffect(() => {
    if (selectedBadge != null) {
      setQuery(selectedBadge);
      setIsOpen(true);
    }
  }, [selectedBadge]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = useCallback(
    (searchQuery: string) => {
      if (searchQuery.trim()) {
        setRecentSearches((prev) => {
          const filtered = prev.filter((item) => item !== searchQuery);
          return [searchQuery, ...filtered].slice(0, 6);
        });

        setQuery(searchQuery);
        setIsOpen(false);
      }
    },
    [setRecentSearches]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setIsOpen(true);
    },
    []
  );

  const handleOpenDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleWorkshopClick = useCallback(
    (workshop: Workshop) => {
      router.push(ROUTES.MECHANIC_DETAIL(workshop.id));
    },
    [router]
  );

  const handleServiceClick = useCallback(
    (service: string) => {
      router.push(ROUTES.SEARCH_BY_SERVICE(service));
    },
    [router]
  );

  const handleRecentSearchClick = useCallback(
    (search: string) => {
      setQuery(search);
      handleSearch(search);
    },
    [handleSearch]
  );

  const clearSearch = useCallback(() => {
    setSelectedBadge?.(undefined);
    setQuery("");
    inputRef.current?.focus();
    setIsOpen(false);
  }, [setSelectedBadge]);

  const removeRecentSearch = useCallback(
    (searchToRemove: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setRecentSearches((prev) =>
        prev.filter((search) => search !== searchToRemove)
      );
    },
    [setRecentSearches]
  );

  return {
    refs: {
      searchRef,
      inputRef,
    },
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
  };
}
