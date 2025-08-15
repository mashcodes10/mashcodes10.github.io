import {
  Container,
  Badge,
  List,
  ListItem,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tech-Talk with me">
    <Container pt={20}>
      <Title>
        Tech-Talk with me <Badge colorScheme="tealBlue" variant="subtle">Summer 2025</Badge>
      </Title>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg" lineHeight="1.6" fontWeight="medium">
          Interactive summer workshop series introducing healthcare leaders to AI assistants and custom chatbot development using Vanderbilt&apos;s Amplify platform.
        </Text>
      </Box>

      <WorkImage src="/images/works/tech-talk/thumbnail.png" alt="Tech-Talk with me Workshop Thumbnail" />

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="md" lineHeight="1.6">
          Tech-Talk with Me is a summer program hosted by the Future-FLO Lab at Vanderbilt University School of Nursing in collaboration with the CHAIN Advisory Council. Designed for healthcare educators and researchers, the sessions provide hands-on experience with generative AI tools, including OpenAI GPT-4, Anthropic Claude, and Vanderbilt&apos;s Amplify platform. Participants learn to build tailored chatbots, explore AI capabilities, and discuss integration into their professional workflows. The program combines in-person and virtual sessions, live demos, and one-on-one consultations for personalized guidance.
        </Text>
      </Box>

      <WorkImage src="/images/works/tech-talk/tech_talk_poster_old.png" alt="Tech-Talk with me Workshop Poster" />

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <List spacing={3}>
          <ListItem display="flex" alignItems="center" flexWrap="wrap">
            <Meta>Platform</Meta>
            <Text>In-person / Zoom Hybrid</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Stack</Meta>
            <Text>OpenAI GPT-4, Anthropic Claude, Vanderbilt Amplify, Custom Chatbot Framework, Semantic Search, RAG, VectorDB</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" flexWrap="wrap">
            <Meta>Role</Meta>
            <Text>Lead Chatbot Developer & AI Session Facilitator</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Audience</Meta>
            <Text>Healthcare researchers and faculty, educators, CHAIN Advisory Council members</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" flexWrap="wrap">
            <Meta>Event Dates</Meta>
            <Text>Summer 2025</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" flexWrap="wrap">
            <Meta>Videos</Meta>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>To be posted soon</Text>
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Work
