import { OrderBy } from "@/lib/supabase/db";

export type Mechanic = {
  id: number;
  created_at: string;
  place_id: string | null;
  name: string;
  rating: number | null;
  user_ratings_total: number | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  formatted_phone_number: string | null;
  opening_hours: string | null;
  cnpj: string | null;
  contact_email: string | null;
  whatsapp: string | null;
  mechanic_type: string | null;
  description: string | null;
  photos: string[] | null;
  website: string | null;
  types: string[] | null;
  services: string | null;
};

export enum ViewMode {
  List = "list",
  Map = "map",
}

export type UseMechanicsListProps = {
  filters?: MechanicsFilters;
  sortBy: OrderBy;
};

export type MechanicsFilters = {
  textSearch?: string;
  mechanicName?: string;
  rating?: number;
  neighborhood?: Array<{ value: string; label: string }>;
  services?: Array<{ value: string; name: string }>;
};
