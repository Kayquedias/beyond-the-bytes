import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { ListAddress } from './ListAddress';

const AddressPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container
      centerContent={isRegister}
      maxWidth={{ base: '32rem', md: '48rem' }}
      className="space-y-5"
    >
      {isRegister ? <Outlet /> : <ListAddress />}
    </Container>
  );
};

export { AddressPage };
