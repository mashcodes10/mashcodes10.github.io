import { Container, Heading, SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// GitHub repository thumbnails
import thumbLangchain from '../public/images/thumbnails/langchain.jpg'
import thumbMLflow from '../public/images/thumbnails/mlflow.jpg'
import thumbDVC from '../public/images/thumbnails/dvc.png'
import thumbPydantic from '../public/images/thumbnails/pydantic.png'
import thumbTransformers from '../public/images/thumbnails/hugging-face-transformers.webp'
import thumbUltralytics from '../public/images/thumbnails/ultalytics_yolo.webp'
import thumbCVAT from '../public/images/thumbnails/CVAT-Logo-and-Tagline-Only-scaled.jpg'
import thumbFastAPI from '../public/images/thumbnails/fastapi.png'
import thumbOpenAICookbook from '../public/images/thumbnails/openai_cookbook.png'

const Posts = () => (
  <Layout title="My Radar">
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
          My Radar
        </Heading>
      </Box>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        My handpicked open-source projects and tools that inspire, teach, and shape my work.
      </Box>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="LangChain"
            thumbnail={thumbLangchain}
            href="https://github.com/langchain-ai/langchain"
          >
            Build applications with LLMs through composability
          </GridItem>
          <GridItem
            title="MLflow"
            thumbnail={thumbMLflow}
            href="https://github.com/mlflow/mlflow"
          >
            Machine learning lifecycle management platform
          </GridItem>
          <GridItem
            title="DVC"
            thumbnail={thumbDVC}
            href="https://github.com/iterative/dvc"
          >
            Data versioning and ML pipeline tool
          </GridItem>
          <GridItem
            title="Pydantic"
            thumbnail={thumbPydantic}
            href="https://github.com/pydantic/pydantic"
          >
            Data validation using Python type hints
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Transformers"
            thumbnail={thumbTransformers}
            href="https://github.com/huggingface/transformers"
          >
            State-of-the-art ML models by Hugging Face
          </GridItem>
          <GridItem
            title="Ultralytics"
            thumbnail={thumbUltralytics}
            href="https://github.com/ultralytics/ultralytics"
          >
            YOLO object detection and instance segmentation
          </GridItem>
          <GridItem
            title="CVAT"
            thumbnail={thumbCVAT}
            href="https://github.com/opencv/cvat"
          >
            Computer Vision Annotation Tool
          </GridItem>
          <GridItem
            title="FastAPI"
            thumbnail={thumbFastAPI}
            href="https://github.com/tiangolo/fastapi"
          >
            Modern, fast web framework for Python APIs
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="OpenAI Cookbook"
            thumbnail={thumbOpenAICookbook}
            href="https://github.com/openai/openai-cookbook"
          >
            Examples and guides for using OpenAI API
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
