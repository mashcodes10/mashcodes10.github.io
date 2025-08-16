import {
  Container,
  Badge,
  List,
  Link,
  ListItem,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Khanflow">
    <Container pt={20}>
      <Title>
        Khanflow <Badge colorScheme="tealBlue" variant="subtle">Ongoing</Badge>
      </Title>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg" lineHeight="1.6" fontWeight="medium">
          AI-powered scheduling platform that integrates with calendars, communication tools, and task boards to automate smart time management.
        </Text>
      </Box>

      <WorkImage src="/images/works/khanflow/thumbnail.png" alt="Khanflow Thumbnail" />

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="md" lineHeight="1.6">
          Khanflow centralizes scheduling by syncing Google Calendar, Outlook, Microsoft Teams, Zoom, Slack, and Google Tasks. Using reasoning models like GPT-4 and Gemini, it understands natural language inputs, recurring events, and priority tasks to recommend optimal meeting times or personal activity slots. Its backend combines LangChain orchestration, Redis caching, and API integrations to handle real-time updates, reducing coordination time of users.
        </Text>
      </Box>

      <WorkImage src="/images/works/khanflow/system_design.png" alt="Khanflow System Architecture" />

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
            <Text>Web App (Desktop & Mobile)</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Frontend</Meta>
            <Text>TypeScript, React, TailwindCSS</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Backend</Meta>
            <Text>Node.js, Express.js, PostgreSQL, OAuth2 authentication</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>AI Models</Meta>
            <Text>GPT-4, GPT-4o, Claude, Google Gemini (reasoning models for natural language understanding & scheduling logic)</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Integrations</Meta>
            <Text>Google Calendar API, Google Tasks API, Microsoft Outlook API, Microsoft Teams API, Zoom API, Slack API</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Infrastructure</Meta>
            <Text>Docker, AWS Lambda, AWS RDS, Nginx, Redis cache</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Tools</Meta>
            <Text>LangChain for orchestration, CRON-based automation for recurring tasks, WebSockets for real-time updates</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Repository</Meta>
            <Link 
              href="https://github.com/mashcodes10/khanflow"
              color="tealBlue.500"
              _hover={{ textDecoration: 'underline' }}
              target="_blank"
              flex="1"
            >
              khanflow <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Work
