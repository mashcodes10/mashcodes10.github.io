import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'

const Work = () => (
  <Layout title="Sim2Real Object Detection">
    <Container pt={20}>
      <Title>
        Sim2Real Object Detection <Badge colorScheme="tealBlue" variant="subtle">Present</Badge>
      </Title>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg" lineHeight="1.6" fontWeight="medium">
          Fine-tuning YOLO with synthetic data from Yrikka to close the gap between simulated and real-world object detection.
        </Text>
      </Box>

      <WorkImage src="/images/works/sim2real/thumbnail.png" alt="Sim2Real Object Detection Thumbnail" />

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="md" lineHeight="1.6" mb={4}>
          This project, in collaboration with Yrikka through the Cornell Tech AI Studio, tackles the synthetic-to-real (sim2real) performance gap in object detection. Using Yrikka&apos;s data engine, the team generates and annotates synthetic images for everyday objects—potted plant, chair, cup, vase, and book—then fine-tunes a YOLO model to boost its accuracy on challenging real-world test sets.
        </Text>
        <Text fontSize="md" lineHeight="1.6">
          The workflow includes annotation correction with CVAT, targeted synthetic data generation for edge cases, and performance evaluation using mAP@50, aiming for at least a 0.10 improvement over the baseline model.
        </Text>
      </Box>

      <WorkImage src="/images/works/sim2real/system_design.png" alt="Sim2Real Object Detection Results" />

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
            <Text>Google Colab / Kaggle / CVAT</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Model</Meta>
            <Text>Ultralytics YOLO (on PyTorch)</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Tools</Meta>
            <Text>scikit‑learn, CVAT, OpenCV, Matplotlib</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Synthetic Data</Meta>
            <Text>Yrikka Data Engine / APEX API</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Goal</Meta>
            <Text>Improve YOLO object detection mAP@50 by ≥ 0.10 using synthetic data</Text>
          </ListItem>
          <ListItem display="flex" alignItems="flex-start" flexWrap="wrap">
            <Meta>Reference</Meta>
            <Link 
              href="https://www.yrikka.com/"
              color="tealBlue.500"
              _hover={{ textDecoration: 'underline' }}
              target="_blank"
              flex="1"
            >
              https://www.yrikka.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem display="flex" alignItems="center" flexWrap="wrap">
            <Meta>Github</Meta>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>Pending Permission to make it public</Text>
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Work
