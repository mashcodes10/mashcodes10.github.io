import NextLink from 'next/link'
import Head from 'next/head'
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
    <Head>
      <title>Md. Mashiur Rahman Khan - AI & Software Engineering Portfolio</title>
      <meta name="description" content="Mashiur Rahman Khan, Vanderbilt CS + Math student specializing in AI, Machine Learning, and Software Engineering. Building impactful software that bridges AI with real-world needs." />
    </Head>
    <Container>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Md. Mashiur Rahman Khan
          </Heading>
          <p>Vanderbilt CS + Math | AI, Machine Learning, & Software Engineering</p>
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
        Hi, I’m Mashiur, a junior at Vanderbilt University majoring in Computer Science and Mathematics. I love building impactful software that bridges AI with real-world needs.

Recently I built an AWS Bedrock chatbot powered by Claude 3 Sonnet that analyzed 1,000+ SEC filings, improving Q&A accuracy by 60% through a context-aware pipeline. At the Vanderbilt School of Nursing, I developed a generative AI chatbot to streamline internal grant analysis, and I led workshops for faculty to adopt AI tools.

I’m also working with Yrikka, an AI safety startup, on a Cornell Tech project to close the synthetic-to-real data gap by fine-tuning YOLO models on synthetic data for more robust object detection in autonomous systems.
Through fellowships like Cornell Tech AI/ML, I’ve strengthened my expertise in scalable systems, applied machine learning, and full-stack development. I’m seeking opportunities to contribute to building reliable, high-impact applications that solve meaningful problems.

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
            Soccer, Diverse Cuisines
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
