import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import thumbKhanflow from '../public/images/thumbnails/khanflow.png'
import thumbTechTalk from '../public/images/thumbnails/tech-talk.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Md. Mashiur Rahman Khan
          </Heading>
          <p>Vanderbilt CS + Math | AI, Machine Learning, & Full-Stack Development</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="140px"
            h="140px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Pasted Graphic 2.png"
              alt="Profile image"
              width="140"
              height="140"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={6}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            About
          </Heading>
        </Box>
        <Paragraph>
          Hey, I&apos;m Mashiur — a Computer Science and Math student at Vanderbilt and a full-time builder of random ideas. Sometimes they turn into polished AI tools or full-stack apps; other times… well, they live in my GitHub graveyard. I&apos;m into machine learning, clean design, and making tech feel less like tech and more like magic. Most days you&apos;ll find me with too many browser tabs open, chasing an idea I swear will only take an hour, reading about new AI research, tweaking some project at 2 a.m., or plotting my next move over coffee.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="tealBlue"
          >
            Explore my recent works
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={6}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Now
          </Heading>
        </Box>
        <SimpleGrid columns={1} spacing={4}>
          {/* Early Years */}
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('tealBlue.400', 'tealBlue.300')}
          >
            <BioSection>
              <BioYear>2023</BioYear>
              Started Computer Science and Mathematics at Vanderbilt University
            </BioSection>
            <BioSection>
              <BioYear>2024</BioYear>
              Lead Chatbot Developer at Vanderbilt Future-FLO Lab
            </BioSection>
          </Box>

          {/* Summer 2025 */}
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('yellow.400', 'yellow.300')}
          >
            <Heading as="h4" size="sm" mb={3} color={useColorModeValue('yellow.600', 'yellow.300')}>
              Summer 2025 ☀️
            </Heading>
            <SimpleGrid columns={1} spacing={3}>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  June - Sept
                </Text>
                <Text>Built MLT GenAI Bot – RAG chatbot analyzing 1,000+ SEC filings to surface financial risks.</Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  May - July
                </Text>
                <Text>Hosted AI Adoption Tech Talk for Vanderbilt faculty & staff.</Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  June
                </Text>
                <Text>Released major Khan Scheduler feature updates.</Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  August
                </Text>
                <Text>Completed Cornell Tech Machine Learning Foundations certification.</Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Fall 2025 */}
          <Box
            borderRadius="lg"
            p={5}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            borderLeft="4px solid"
            borderColor={useColorModeValue('orange.400', 'orange.300')}
          >
            <Heading as="h4" size="sm" mb={3} color={useColorModeValue('orange.600', 'orange.300')}>
              Fall 2025 🍂 (In Progress)
            </Heading>
            <SimpleGrid columns={1} spacing={3}>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  August - Present
                </Text>
                <Text>Yrikka AI Safety Project – Industry collaboration via Cornell Tech to improve YOLO object detection using synthetic data for challenging real-world cases.</Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
                  August
                </Text>
                <Text>Khan Scheduler Automation – Expanding features and integrations to streamline scheduling and task management.</Text>
              </Box>
            </SimpleGrid>
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
          mb={6}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Things I&apos;m Into
          </Heading>
        </Box>
        <Box
          borderRadius="lg"
          p={6}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Paragraph>
Machine Learning, AI Research, Full-stack Development, Coffee, 
            Late-night grinding Sessions, Open Source Projects, Tech Podcasts, 
            Soccer, Diverse cuisines
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={6}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Connect
          </Heading>
        </Box>
        <Box
          borderRadius="lg"
          p={6}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <List>
            <ListItem>
              <Link href="https://github.com/mashcodes10" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="tealBlue"
                  leftIcon={<IoLogoGithub />}
                >
                  @mashcodes10
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/mashter/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="tealBlue"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @mashter
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={8}>
          <GridItem
            href="/works/khanflow"
            title="Khanflow"
            thumbnail={thumbKhanflow}
            external={false}
          >
            AI-powered scheduling platform
          </GridItem>
          <GridItem
            href="/works/tech-talk"
            title="Tech-Talk with me"
            thumbnail={thumbTechTalk}
            external={false}
          >
            Healthcare AI workshop series
          </GridItem>
        </SimpleGrid>


      </Section>
    </Container>
  </Layout>
)

export default Home
