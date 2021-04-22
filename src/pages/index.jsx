import { 
  Box, 
  Container, 
  Heading, 
  Text,
  UnorderedList,
  ListItem,
  Image, 
  Button,
  Link
} from '@chakra-ui/react'
import Head from 'next/head'
import LoginFields from '../components/loginFields'

export default function Login() {
  return (
    <Box height="100vh">
      <Head>
        <title>Ensino sem Fronteira</title>
      </Head>
      <Box
          as="header"
          height="4rem"
          width="100%"
          padding="2rem 0"
        >
          <Container maxW="container.lg">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                width="100%"
              >
                <LoginFields />
                <Button>Logar</Button>
              </Box>
          </Container>
        </Box>
      <Container maxW="container.lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          padding="1rem 0"
          justifyContent="space-between"
          height="30rem"
        >
          <Heading 
            as="h1"
            fontSize="5rem"
            color="yellow"
            maxWidth="40rem"
          >
            Ensino sem Fronteira
          </Heading>
          <Text 
            as="p"
            maxWidth="35rem"
            fontWeight="400"
            margin="3rem 0"
          >
            Um lugar onde quebramos as barreiras do ensino, trazendo professores voluntarios com o fóco de ensinar e transformar vidas.
          </Text>
          <Box
            height="20rem"
          >
            <Text as="p" color="yellow">+ de 100 tipos de cursos, venha conferir.</Text>
            <UnorderedList
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              margin="2rem 0"
              width="22rem"
            >
              <ListItem>
                <Image 
                  src="./math.svg" 
                  maxWidth="4rem"
                  alt="matematica"
                  transition="all 0.9s"
                  sx={{
                    _hover: {
                      transform: 'scale(0.8)'
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <Image 
                  src="./language.svg"
                  maxWidth="4rem"
                  alt="letras"
                  transition="all 0.9s"
                  sx={{
                    _hover: {
                      transform: 'scale(0.8)'
                    }
                  }}                 
                />
              </ListItem>
              <ListItem>
                <Image 
                  src="./history.svg"
                  maxWidth="4rem"
                  alt="historia"
                  transition="all 0.9s"
                  sx={{
                    _hover: {
                      transform: 'scale(0.8)'
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <Image 
                  src="./geograph.svg"
                  maxWidth="4rem"
                  alt="geografia"
                  transition="all 0.9s"
                  sx={{
                    _hover: {
                      transform: 'scale(0.8)'
                    }
                  }}
                />
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
