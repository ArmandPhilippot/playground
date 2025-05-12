export const LocalStorage = {
  get<T>(key: string): T | undefined {
    try {
      const serialItem = localStorage.getItem(key);
      if (serialItem === null) return undefined;
      return JSON.parse(serialItem) as T;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
  set<T>(key: string, value: T) {
    try {
      const serialItem = JSON.stringify(value);
      localStorage.setItem(key, serialItem);
    } catch (error) {
      console.error(error);
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
