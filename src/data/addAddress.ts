import { toast } from 'react-toastify';

import {
  AddressStorageValue,
  getFromLocalStorage,
  saveToLocalStorage,
} from './api';
import { getRandomPicture } from '../helpers/randomPicture';

export const addAddress = (address: Omit<AddressStorageValue, 'image'>) => {
  const storage = getFromLocalStorage();
  if (!storage) return;

  const existentAddress = storage.find((item) => item.id === address.id);

  if (existentAddress) {
    toast.error('Endereço já existe');
    return false;
  }

  const image = getRandomPicture();
  const result = saveToLocalStorage('db', [
    ...storage,
    { id: address.id, image },
  ]);
  if (!result) {
    toast.error('Erro inesperado, tente novamente!');
    return false;
  }

  toast.success('Endereço adicionado com sucesso!');
  return true;
};
