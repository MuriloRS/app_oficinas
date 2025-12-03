export class LocalStorage {
  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }

  getItem<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return null;
    }
  }

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Erro ao remover do localStorage:", error);
    }
  }

  clear(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Erro ao limpar localStorage:", error);
    }
  }
}
