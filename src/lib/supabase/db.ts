import { supabase } from "./supabaseClient";

type WhereFilter = Record<string, string | number | boolean>;

export enum OrderBy {
  Relevance = "Relevance",
  Rating = "Rating",
}

export type FilterCondition = {
  field: string;
  operator:
    | "eq"
    | "ilike"
    | "gte"
    | "lte"
    | "gt"
    | "lt"
    | "contains"
    | "in"
    | "text_search"
    | "or_ilike";
  value: string | number | boolean | string[];
  searchFields?: string[];
};

type GetAllType = {
  table: string;
  options?: {
    limit?: number;
    where?: WhereFilter;
    filters?: FilterCondition[];
    orderBy?: OrderBy;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const applyFilterConditions = (query: any, filters: FilterCondition[]) => {
  let modifiedQuery = query;

  for (const filter of filters) {
    switch (filter.operator) {
      case "eq":
        modifiedQuery = modifiedQuery.eq(filter.field, filter.value);
        break;
      case "ilike":
        modifiedQuery = modifiedQuery.ilike(filter.field, `%${filter.value}%`);
        break;
      case "gte":
        modifiedQuery = modifiedQuery.gte(filter.field, filter.value);
        break;
      case "lte":
        modifiedQuery = modifiedQuery.lte(filter.field, filter.value);
        break;
      case "gt":
        modifiedQuery = modifiedQuery.gt(filter.field, filter.value);
        break;
      case "lt":
        modifiedQuery = modifiedQuery.lt(filter.field, filter.value);
        break;
      case "contains":
        modifiedQuery = modifiedQuery.contains(filter.field, [filter.value]);
        break;
      case "in":
        if (Array.isArray(filter.value)) {
          modifiedQuery = modifiedQuery.in(filter.field, filter.value);
        }
        break;
      case "text_search":
        if (filter.searchFields && typeof filter.value === "string") {
          const orConditions = filter.searchFields
            .map((field) => `${field}.ilike.%${filter.value}%`)
            .join(",");
          modifiedQuery = modifiedQuery.or(orConditions);
        }
        break;
      case "or_ilike":
        if (Array.isArray(filter.value)) {
          const orConditions = filter.value
            .map((val) => `${filter.field}.ilike.%${val}%`)
            .join(",");
          modifiedQuery = modifiedQuery.or(orConditions);
        }
        break;
    }
  }

  return modifiedQuery;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const applyOrderBy = (query: any, orderBy?: OrderBy) => {
  let modifiedQuery = query;

  if (orderBy === OrderBy.Rating) {
    modifiedQuery = modifiedQuery.order("rating", {
      ascending: false,
      nullsFirst: false,
    });
  } else {
    modifiedQuery = modifiedQuery.order("relevance", {
      ascending: false,
      nullsFirst: false,
    });
  }

  return modifiedQuery;
};

export async function getAll<T>({ table, options }: GetAllType): Promise<T[]> {
  let query = supabase.from(table).select("*");

  if (options?.filters) {
    query = applyFilterConditions(query, options.filters);
  }

  query = applyOrderBy(query, options?.orderBy);

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) {
    console.error(`Error fetching from ${table}:`, error.message);
    throw error;
  }

  return data as T[];
}

export async function getById<T>(
  table: string,
  id: number | string
): Promise<T | null> {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Error fetching from ${table}:`, error.message);
    return null;
  }

  return data as T;
}

export async function insert<T>(
  table: string,
  payload: Partial<T>
): Promise<T | null> {
  const { data, error } = await supabase
    .from(table)
    .insert(payload)
    .select()
    .single();

  if (error) {
    console.error(`Error inserting into ${table}:`, error.message);
    return null;
  }

  return data as T;
}

export async function update<T>(
  table: string,
  id: number | string,
  payload: Partial<T>
): Promise<T | null> {
  const { data, error } = await supabase
    .from(table)
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(`Error updating ${table}:`, error.message);
    return null;
  }

  return data as T;
}

export async function remove(
  table: string,
  id: number | string
): Promise<boolean> {
  const { error } = await supabase.from(table).delete().eq("id", id);

  if (error) {
    console.error(`Error deleting from ${table}:`, error.message);
    return false;
  }

  return true;
}
