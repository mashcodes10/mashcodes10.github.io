import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mashiur's homepage" />
        <meta name="author" content="Md. Mashiur Rahman Khan" />
        <meta name="author" content="mashcodes10" />
        <link rel="apple-touch-icon" href="/Mashter_M.png" />
        <link rel="shortcut icon" href="/Mashter_M.png" type="image/png" />
        <meta name="twitter:title" content="Md. Mashiur Rahman Khan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mashcodes10" />
        <meta name="twitter:creator" content="@mashcodes10" />
        
        <meta property="og:site_name" content="Md. Mashiur Rahman Khan" />
        <meta name="og:title" content="Md. Mashiur Rahman Khan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Mashter_M.png" />
        <title>Md. Mashiur Rahman Khan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
