import { MechanicServicesEnum } from "@/constants/MechanicServicesConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MechanicsFilters } from "../MechanicsList/MechanicsList.type";

export const serviceItemSchema = z.object({
  value: z.enum(MechanicServicesEnum),
  name: z.string(),
});

const filterFormSchema = z.object({
  textSearch: z.string().optional(),
  mechanicName: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  neighborhood: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional(),
  services: z.array(serviceItemSchema).optional(),
});

type FilterFormData = z.infer<typeof filterFormSchema>;

export default function useFilter(
  onFilterApply: (filters: MechanicsFilters) => void
) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultValues: FilterFormData = {
    services: [],
    neighborhood: [],
    rating: undefined,
    mechanicName: "",
    textSearch: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormSchema),
    defaultValues,
  });

  const watchedValues = watch();

  const handleClearFilters = () => {
    reset(defaultValues);
    onFilterApply({});

    const params = new URLSearchParams(searchParams.toString());
    if (params.has("servico")) {
      params.delete("servico");
      const newUrl = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
      router.replace(newUrl);
    }
  };

  const submitForm = handleSubmit(async (data: FilterFormData) => {
    try {
      const filters: MechanicsFilters = {
        textSearch: data.textSearch,
        mechanicName: data.mechanicName,
        rating: data.rating,
        neighborhood: data.neighborhood,
        services: data.services,
      };

      onFilterApply(filters);
    } catch (error) {
      console.error("Error submitting filter form:", error);
    }
  });

  return {
    register,
    handlers: {
      handleClearFilters,
      submitForm,
      setValue,
    },
    states: {
      errors,
      isSubmitting,
      watchedValues,
    },
  };
}
