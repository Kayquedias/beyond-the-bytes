import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PlusIcon from '../../assets/plus.png';

type ListAddressProps = {
  data: { id: string; image: string }[];
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListAddress: React.FC<ListAddressProps> = ({ data, setIsRegister }) => {
  return (
    <Container
      centerContent
      maxWidth={{ base: '32rem', md: '48rem', lg: '60rem' }}
      className="space-y-10 my-20 sm:mt-0 w-full"
    >
      <Heading
        as="h1"
        size="xl"
        w={'max-content'}
        mb={5}
        fontFamily={'DINNeuzeitGrotesk LT'}
        className="uppercase font-normal tracking-widest text-gray-700 mt-20 lg:mt-40"
      >
        Endereços
      </Heading>

      <Grid
        className="w-full grid-cols-2 grid-flow-row md:grid-cols-3"
        gridAutoRows={'1fr'}
        gap={2}
        rowGap={12}
      >
        {data.map((item) => {
          return (
            <Card
              className="gap-5 relative"
              rounded={0}
              shadow={0}
              w={'full'}
              key={item.id}
            >
              <Box className="bg-card px-10 py-12">
                <img src={item.image} alt="" className="w-40 mx-auto" />
              </Box>

              <Center className="flex flex-col gap-1.5">
                <Heading
                  as={'h4'}
                  fontWeight={400}
                  fontFamily={'DINNeuzeitGrotesk LT'}
                  size={'sm'}
                  className="uppercase tracking-wider"
                >
                  Endereço ID
                </Heading>

                <span>#{item.id}</span>
              </Center>

              <motion.span></motion.span>
            </Card>
          );
        })}

        <Link to={'register'} onClick={() => setIsRegister(true)}>
          <GridItem className="w-full min-h-40 h-[68.3%] bg-dark flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-dark/80 md:h-[74.2%] md:min-h-52 lg:min-h-64">
            <img src={PlusIcon} alt="" className="w-10" />
          </GridItem>
        </Link>
      </Grid>
    </Container>
  );
};

export { ListAddress };
