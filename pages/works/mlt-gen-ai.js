import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="MLT GEN AI Partner Bot">
    <Container pt={20}>
      <Title>
        MLT GEN AI Partner Bot <Badge colorScheme="tealBlue" variant="subtle">Jun - Present</Badge>
      </Title>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg" lineHeight="1.6" fontWeight="medium">
          AWS Bedrock–powered chatbot that analyzes SEC 10-Q filings to surface financial risks with context-based LLM queries.
        </Text>
      </Box>



      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="md" lineHeight="1.6">
          This project uses AWS Bedrock with Claude 3 Sonnet, AWS Lambda, and the SEC EDGAR API to automate retrieval and preprocessing of 10-Q filings. It implements a no-context vs. context-based RAG pipeline, enabling precise financial Q&A and improving answer accuracy by 60% while cutting data processing time by 70%.
        </Text>
      </Box>

      <WorkImage src="/images/works/mlt-gen-ai/system_design.png" alt="MLT GEN AI Partner Bot Architecture" />

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
            <Text>AWS Cloud (Lambda, Bedrock), Python Boto3, Web Chatbot Interface</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Stack</Meta>
            <Text>AWS Bedrock (Claude 3 Sonnet), Python, Boto3, AWS Lambda, EDGAR API, SEC 10-Q Filings, RAG Pipeline</Text>
          </ListItem>
          <Meta>Repository</Meta>
            <Link 
              href="https://github.com/mashcodes10/mlt-genai-partner-bot"
              color="tealBlue.500"
              _hover={{ textDecoration: 'underline' }}
              target="_blank"
              flex="1"
            >
              mlt-genai-partner-bot <ExternalLinkIcon mx="2px" />
            </Link>
        </List>
      </Box>


    </Container>
  </Layout>
)

export default Work
