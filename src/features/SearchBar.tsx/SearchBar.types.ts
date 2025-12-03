export interface Workshop {
  id: string;
  name: string;
  services: string;
  address: string;
}

export interface SearchBarProps {
  selectedBadge?: string;
  setSelectedBadge?: (badge: string | undefined) => void;
}
