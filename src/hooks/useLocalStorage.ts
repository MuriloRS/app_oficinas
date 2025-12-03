import { LocalStorage } from "@/lib/localStorage";
import { useEffect, useMemo, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const localStorage = useMemo(() => new LocalStorage(), []);

  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem<T>(key);
    return item !== null ? item : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [key, storedValue, localStorage]);

  return [storedValue, setStoredValue] as const;
}
