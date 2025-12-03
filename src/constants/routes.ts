export const ROUTES = {
  HOME: "/",
  SERVICES: "/servicos",
  ABOUT: "/sobre",
  CONTACT: "/contato",
  SEARCH: "/busca",

  LOGIN: "/login",
  SIGNUP: "/cadastro",

  MECHANIC_SIGNUP: "/cadastro-oficina",
  MECHANIC_DETAIL: (id: string | number) => `/oficina/${id}`,

  SEARCH_BY_SERVICE: (service: string) =>
    `/busca?servico=${encodeURIComponent(service)}`,
  SEARCH_BY_LOCATION: (location: string) =>
    `/busca?localizacao=${encodeURIComponent(location)}`,
  SEARCH_WITH_PARAMS: (params: Record<string, string>) => {
    const queryString = new URLSearchParams(params).toString();
    return `/busca?${queryString}`;
  },
} as const;

export const isPublicRoute = (pathname: string): boolean => {
  const publicRoutes: string[] = [
    ROUTES.HOME,
    ROUTES.ABOUT,
    ROUTES.MECHANIC_SIGNUP,
  ];

  return publicRoutes.includes(pathname) || pathname.startsWith("/oficina/");
};

export const buildMechanicUrl = (id: string | number): string => {
  return ROUTES.MECHANIC_DETAIL(id);
};

export const buildSearchUrl = (filters?: {
  service?: string;
  location?: string;
  rating?: number;
  neighborhood?: string;
}): string => {
  if (!filters || Object.keys(filters).length === 0) {
    return ROUTES.SEARCH;
  }

  const params: Record<string, string> = {};

  if (filters.service) params.servico = filters.service;
  if (filters.location) params.localizacao = filters.location;
  if (filters.rating) params.avaliacao = String(filters.rating);
  if (filters.neighborhood) params.bairro = filters.neighborhood;

  return ROUTES.SEARCH_WITH_PARAMS(params);
};
