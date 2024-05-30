import { string, object } from 'yup';

export const addressSchema = object({
  id: string().required('Id inválido').length(4, 'Id inválido'),
});
