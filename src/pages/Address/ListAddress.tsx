import { Box, Card, Center, Container, Grid, Heading } from '@chakra-ui/react';

import PlanetKay from '../../assets/planet-amico.svg';

const ListAddress: React.FC = () => {
  //   const data = [1234, 1234];

  return (
    <Container
      centerContent
      maxWidth={{ base: '32rem', md: '48rem', lg: '60rem' }}
      className="space-y-10 mt-20 sm:mt-0 w-full"
    >
      <Heading
        as="h1"
        size="xl"
        w={'max-content'}
        mb={5}
        fontFamily={'DINNeuzeitGrotesk LT'}
        className="uppercase font-normal tracking-widest text-gray-700"
      >
        Endereços
      </Heading>

      <Grid className="w-full grid-cols-2 md:grid-cols-3" gap={2} rowGap={12}>
        <Card className="gap-5" rounded={0} shadow={0} w={'full'}>
          <Box className="bg-card px-10 py-12">
            <img src={PlanetKay} alt="" className="w-40 mx-auto" />
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

            <span>#1234</span>
          </Center>
        </Card>

        <Card className="gap-5" rounded={0} shadow={0} w={'full'}>
          <Box className="bg-card px-10 py-12">
            <img src={PlanetKay} alt="" className="w-40 mx-auto" />
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

            <span>#1234</span>
          </Center>
        </Card>

        <Card className="gap-5" rounded={0} shadow={0} w={'full'}>
          <Box className="bg-card px-10 py-12">
            <img src={PlanetKay} alt="" className="w-40 mx-auto" />
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

            <span>#1234</span>
          </Center>
        </Card>
      </Grid>
    </Container>
  );
};

export { ListAddress };
