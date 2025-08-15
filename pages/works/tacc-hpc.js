import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TACC HPC Insurance Recommender">
    <Container pt={20}>
      <Title>
        TACC HPC Insurance Recommender <Badge colorScheme="tealBlue" variant="subtle">2025</Badge>
      </Title>

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Clustering-based insurance plan recommender to improve healthcare access visualization for policymakers.
      </Box>
      <WorkImage src="/images/works/tacc/tacc_thumbnail.png" alt="TACC HPC Project" />
      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <P>
          This project leveraged multi-region provider and plan data to build a clustering-based recommendation system, 
          improving match accuracy by 25%. A Streamlit dashboard was deployed on TACC&apos;s high-performance computing (HPC) 
          systems, enabling policymakers to visualize and analyze healthcare access gaps interactively.
        </P>
      </Box>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>TACC HPC Systems, Streamlit, Python, Scikit-learn, Pandas</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Scikit-learn, Pandas, NumPy, Matplotlib, Streamlit, TACC HPC</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tacc.utexas.edu/education/undergraduates-graduates/acsc/pearc25/participants/" target="_blank">
            TACC PEARC25 ACSC Onsite
          </Link>
        </ListItem>
      </List>

      
      <WorkImage src="/images/works/tacc/tacc_pres.png" alt="TACC Presentation" />
    </Container>
  </Layout>
)

export default Work
