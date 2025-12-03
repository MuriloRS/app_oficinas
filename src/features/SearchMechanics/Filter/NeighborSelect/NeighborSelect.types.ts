export interface Option {
  value: string;
  label: string;
}

export interface NeighborSelectProps {
  value?: Option[];
  onChange?: (value: Option[]) => void;
}

export type LocationStateType = {
  latitude: number;
  longitude: number;
} | null;
