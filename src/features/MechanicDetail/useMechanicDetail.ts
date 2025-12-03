import { getById } from "@/lib/supabase/db";
import { mapperMechanicDetail } from "@/mappers/MapperMechanicDetail";
import { useQuery } from "@tanstack/react-query";
import { Mechanic } from "../SearchMechanics/MechanicsList/MechanicsList.type";

export default function useMechanicDetail(mechanicId: string) {
  const {
    data: mechanic,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["mechanic", mechanicId],
    enabled: !!mechanicId,
    queryFn: async () => {
      if (!mechanicId) return null;
      const mechanic = await getById<Mechanic>("mechanics", Number(mechanicId));
      return mapperMechanicDetail(mechanic as Mechanic);
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
  });

  return {
    mechanic,
    isLoading,
    isError,
    error,
  };
}
