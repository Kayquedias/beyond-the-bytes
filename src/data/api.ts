export interface AddressStorageValue {
  id: string;
  image: string;
}

export function saveToLocalStorage(
  key: string,
  value: AddressStorageValue[]
): boolean {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error saving to local storage: ${error}`);
    return false;
  }
}

export function getFromLocalStorage(): AddressStorageValue[] | null {
  try {
    const serializedValue = localStorage.getItem('db');
    if (!serializedValue) return null;

    return JSON.parse(serializedValue);
  } catch (error) {
    console.error(`Error retrieving from local storage: ${error}`);
    return null;
  }
}

export function initLocalStorage() {
  const storage = getFromLocalStorage();
  if (storage?.length) return;

  saveToLocalStorage('db', []);
}
