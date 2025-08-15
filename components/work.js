import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'

export const Title = ({ children }) => (
  <Box mb={6}>
    <Box mb={4}>
      <Link 
        as={NextLink} 
        href="/works"
        color="tealBlue.500"
        fontWeight="medium"
        _hover={{ textDecoration: 'underline' }}
      >
        ← Back to Works
      </Link>
    </Box>
    <Box 
      display="inline-block" 
      bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
      px={3} 
      py={1} 
      borderRadius="md"
      mb={4}
    >
      <Heading as="h1" size="lg" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
        {children}
      </Heading>
    </Box>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="tealBlue" variant="subtle" mr={2} fontSize="xs">
    {children}
  </Badge>
)
