import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import { ListAddress } from './ListAddress';
import { getFromLocalStorage } from '../../data/api';

const AddressPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const data = getFromLocalStorage();

  return (
    <Container
      centerContent={isRegister}
      maxWidth={{ base: '32rem', md: '48rem', lg: '60rem' }}
      padding={0}
      className="space-y-5"
    >
      {isRegister ? (
        <Outlet context={{ setIsRegister }} />
      ) : (
        <ListAddress data={data || []} setIsRegister={setIsRegister} />
      )}
    </Container>
  );
};

export { AddressPage };
