import { Container, Heading, SimpleGrid, Box, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKhanflow from '../public/images/thumbnails/khanflow.png'
import thumbMLTGenAI from '../public/images/thumbnails/mlt-gen-ai.png'
import thumbSim2Real from '../public/images/thumbnails/sim2real.png'
import thumbTechTalk from '../public/images/thumbnails/tech-talk.png'

// Recently Completed projects
import thumbTACC from '../public/images/works/tacc/tacc_thumbnail.png'
import thumbAirbnb from '../public/images/works/airbnb/airbnb.png'

const Works = () => (
  <Layout title="Works">
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
          Recent Works
        </Heading>
      </Box>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={8}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text>
        Projects I’m actively building and improving.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="khanflow" title="Khanflow" thumbnail={thumbKhanflow}>
            AI-powered scheduling platform that integrates with calendars, communication tools, and task boards to automate smart time management
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="mlt-gen-ai"
            title="MLT GEN AI Partner Bot"
            thumbnail={thumbMLTGenAI}
          >
            AWS Bedrock–powered chatbot that analyzes SEC 10-Q filings to surface financial risks with context-based LLM queries
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="sim2real"
            title="Sim2Real Object Detection"
            thumbnail={thumbSim2Real}
          >
            Fine-tuning YOLO with synthetic data from Yrikka to close the gap between simulated and real-world object detection
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="tech-talk" thumbnail={thumbTechTalk} title="Tech-Talk with me">
            Interactive summer workshop series introducing healthcare leaders to AI assistants and custom chatbot development
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={6}
          mt={12}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            Recently Completed
          </Heading>
        </Box>
        
        <Box
          borderRadius="lg"
          p={6}
          mb={8}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Text>
            Academic and research projects completed recently.
          </Text>
        </Box>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem id="tacc-hpc" title="TACC HPC Insurance Recommender" thumbnail={thumbTACC}>
            Clustering-based insurance plan recommender to improve healthcare access visualization for policymakers
          </WorkGridItem>
          <WorkGridItem id="airbnb-prediction" title="NYC Airbnb Price Prediction" thumbnail={thumbAirbnb}>
            Machine learning model to predict NYC Airbnb listing prices using feature engineering and ensemble methods
          </WorkGridItem>
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Works
