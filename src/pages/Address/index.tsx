import React from 'react';
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

const AddressPage: React.FC = () => {
  return (
    <Container centerContent>
      <Heading
        as="h3"
        size="2xl"
        w={'max-content'}
        fontFamily={'DINNeuzeitGrotesk LT'}
        className="uppercase font-normal"
      >
        Endereço
      </Heading>
      <Text fontFamily={'DINNeuzeitGrotesk LT'} className="font-thin">
        Por favor, preencha a informação abaixo
      </Text>
      <FormControl isRequired>
        <FormLabel>Id</FormLabel>
        <Input
          type="number"
          placeholder="1234"
          borderRadius={'none'}
          borderWidth={'1px'}
          focusBorderColor="#010100"
          _focus={{ borderColor: 'dark', borderWidth: '1px' }}
          className="rounded-none placeholder:text-gray-800 font-thin focus:border-dark focus:border focus-within:border focus-within:border-dark"
        />
        <FormHelperText color="gray.400">
          Lembre-se que são necessários 4 dígitos
        </FormHelperText>
      </FormControl>

      <button
        type="submit"
        className="uppercase py-2.5 px-5 w-full bg-dark text-white font-grotesk"
      >
        <span />
        Criar endereço
      </button>
    </Container>
  );
};

export { AddressPage };
