import { Container, Heading, SimpleGrid, Box, useColorModeValue, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// Placeholder thumbnails - you can replace these with actual campus involvement images
import thumbTechTalk from '../public/images/thumbnails/tech-talk.png'

const Campus = () => (
  <Layout title="Campus">
    <Container pt={20}>
      <Box 
        display="inline-block" 
        bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
        px={2} 
        py={0.5} 
        borderRadius="md"
        mb={6}
      >
        <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
          Campus
        </Heading>
      </Box>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        My involvement in campus activities, organizations, and community initiatives at Vanderbilt University.
      </Box>

      <Section delay={0.1}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={4}
        >
          <Heading as="h4" size="sm" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Leadership & Organizations
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={8}>
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('tealBlue.400', 'tealBlue.300')}
          >
            <Link href="https://brainhack-vandy.github.io/" target="_blank" _hover={{ textDecoration: 'none' }}>
              <Heading 
                as="h5" 
                size="sm" 
                mb={2} 
                color={useColorModeValue('tealBlue.600', 'tealBlue.300')}
                _hover={{ 
                  color: useColorModeValue('tealBlue.700', 'tealBlue.200'),
                  transform: 'translateY(-1px)',
                  transition: 'all 0.2s ease'
                }}
                cursor="pointer"
              >
                BrainHack Vanderbilt ↗
              </Heading>
            </Link>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              Developer
            </Text>
            <Text fontSize="sm">
            launched the official website for Brainhack Vanderbilt, showcasing events, resources, and community projects.
            </Text>
          </Box>
          
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('orange.400', 'orange.300')}
          >
                        <Link href="https://vandyhacks.org/" target="_blank" _hover={{ textDecoration: 'none' }}>
              <Heading 
                as="h5" 
                size="sm" 
                mb={2} 
                color={useColorModeValue('orange.600', 'orange.300')}
                _hover={{ 
                  color: useColorModeValue('orange.700', 'orange.200'),
                  transform: 'translateY(-1px)',
                  transition: 'all 0.2s ease'
                }}
                cursor="pointer"
              >
                VandyHacks ↗
              </Heading>
            </Link>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              Operations Board - 2024
            </Text>
            <Text fontSize="sm">
            Active member of student tech organizations, contributing to events, workshops, and community-building initiatives.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={4}
        >
          <Heading as="h4" size="sm" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Campus Events & Initiatives
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={8}>
          <GridItem
            title="AI Adoption Tech Talk"
            thumbnail={thumbTechTalk}
            href="/works/tech-talk"
            external={false}
          >
            Workshop series for healthcare faculty and staff
          </GridItem>
          
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('purple.400', 'purple.300')}
          >
            <Heading as="h5" size="sm" mb={2} color={useColorModeValue('purple.600', 'purple.300')}>
              Campus Event
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              September 2024
            </Text>
            <Text fontSize="sm">
            Coordinated logistics, budgeting, and judge engagement for VandyHacks XI, a 600+ attendee hackathon at Vanderbilt University.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={4}
        >
          <Heading as="h4" size="sm" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Academic & Research
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('green.400', 'green.300')}
          >
            <Heading as="h5" size="sm" mb={2} color={useColorModeValue('green.600', 'green.300')}>
            Future-FLO Lab
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
            Lead Chatbot Developer
            </Text>
            <Text fontSize="sm">
            Leading development of AI chatbot solutions for healthcare research and education.
            </Text>
          </Box>
          
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('blue.400', 'blue.300')}
          >
            <Heading as="h5" size="sm" mb={2} color={useColorModeValue('blue.600', 'blue.300')}>
              Academic Achievements
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              Awards & Recognition
            </Text>
            <Text fontSize="sm">
            Vanderbilt Undergraduate Summer Research Program (VUSRP) - 2025 <br />
            Dean&apos;s List (School of Engineering) <br />
            </Text>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Campus
