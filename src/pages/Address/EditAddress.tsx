import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import {
  Center,
  Container,
  Flex,
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
import { editAddress } from '../../data/editAddress';

interface FormValues {
  id: string;
}

const EditAddress: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    if (!id) return;
    const result = editAddress(id, values);

    if (!result) {
      action.setSubmitting(false);
      return;
    }

    action.setSubmitting(false);
    navigate('/address');
  };

  return (
    <Container
      centerContent
      maxWidth={{ base: '32rem', md: '48rem', lg: '60rem' }}
      className="space-y-10 my-20 sm:mt-0 w-full"
    >
      <Heading
        as="h3"
        size="2xl"
        w={'max-content'}
        mb={5}
        fontFamily={'DINNeuzeitGrotesk LT'}
        className="uppercase font-normal tracking-wider mt-28"
      >
        Edição de endereço <br />
        <Center className="mt-2">#{id}</Center>
      </Heading>
      <Text
        fontFamily={'DINNeuzeitGrotesk LT'}
        textColor={'gray.400'}
        style={{ fontWeight: 100 }}
      >
        Preencha o campo abaixo para alterar o ID de endereço
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

            <Flex flexDir={'column'} gap={1}>
              <Button type="submit" isLoading={props.isSubmitting}>
                <span />
                Enviar
              </Button>

              <Button
                type="button"
                background="secondary"
                onClick={() => navigate('/address')}
              >
                <span />
                Voltar
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export { EditAddress };
