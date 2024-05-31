import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import { Button } from '../../components/Button';
import { addressSchema } from '../../schemas/address';
import { addAddress } from '../../data/addAddress';

interface FormValues {
  id: string;
}
interface OutletContext {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAddress: React.FC = () => {
  const navigate = useNavigate();
  const { setIsRegister } = useOutletContext<OutletContext>();

  const handleSubmit = (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    const result = addAddress(values);

    if (!result) {
      action.setSubmitting(false);
      return;
    }

    action.setSubmitting(false);
    setIsRegister(false);
    navigate('/address');
  };

  return (
    <>
      <Heading
        as="h3"
        size="2xl"
        w={'max-content'}
        mb={5}
        fontFamily={'DINNeuzeitGrotesk LT'}
        className="uppercase font-normal tracking-wider"
      >
        Endereço
      </Heading>
      <Text
        fontFamily={'DINNeuzeitGrotesk LT'}
        textColor={'gray.400'}
        style={{ fontWeight: 100 }}
      >
        Por favor, preencha a informação abaixo
      </Text>

      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={addressSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form className="space-y-5 w-full max-w-lg">
            <Field name="id" className="space-y-5">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!form.errors.id && !!form.touched.id}
                  isRequired
                >
                  <FormLabel>Id</FormLabel>
                  <Input
                    {...field}
                    type="number"
                    placeholder="1234"
                    borderRadius={'none'}
                    borderWidth={'1px'}
                    focusBorderColor="#010100"
                    _focus={{ borderColor: 'dark', borderWidth: '1px' }}
                    className="rounded-none placeholder:text-gray-800 font-thin"
                  />
                  <FormErrorMessage>
                    {form.errors.id as string}
                  </FormErrorMessage>

                  <FormHelperText color="gray.400" mt={2}>
                    Lembre-se que são necessários 4 dígitos
                  </FormHelperText>
                </FormControl>
              )}
            </Field>

            <Button
              type="submit"
              isLoading={props.isSubmitting}
              className="uppercase py-2.5 px-5 w-full bg-dark text-white font-grotesk transition-colors duration-400 border tracking-widest hover:border-dark hover:text-dark hover:bg-white"
            >
              <span />
              Criar endereço
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { FormAddress };
