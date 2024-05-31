import { toast } from 'react-toastify';

import {
  AddressStorageValue,
  getFromLocalStorage,
  saveToLocalStorage,
} from './api';

export const editAddress = (
  id: string,
  address: Omit<AddressStorageValue, 'image'>
) => {
  const storage = getFromLocalStorage();
  if (!storage) return;

  const existentAddress = storage.find((item) => item.id.toString() === id);
  if (!existentAddress) {
    toast.error('Endereço não encontrado');
    return false;
  }

  const addressAlreadyExists = storage.find((item) => item.id === address.id);
  if (addressAlreadyExists) {
    toast.error('Endereço já existe!');
    return false;
  }

  const updatedStorage = storage.map((item) => {
    if (item.id.toString() === id) {
      return {
        id: address.id,
        image: item.image,
      };
    }

    return item;
  });

  const result = saveToLocalStorage('db', updatedStorage);
  if (!result) {
    toast.error('Erro inesperado, tente novamente!');
    return false;
  }

  toast.success('Endereço editado com sucesso!');
  return true;
};
