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
  <Layout title="NYC Airbnb Price Prediction">
    <Container pt={20}>
      <Title>
        NYC Airbnb Price Prediction <Badge colorScheme="tealBlue" variant="subtle">2025</Badge>
      </Title>

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Machine learning model to predict NYC Airbnb listing prices using feature engineering and ensemble methods.
      </Box>

      <Box
        borderRadius="lg"
        p={6}
        mb={6}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <P>
          Built and evaluated multiple regression models on NYC Airbnb listings data to estimate nightly prices. 
          Conducted extensive EDA, handled missing values, encoded categorical features, clipped outliers, and 
          optimized a Random Forest model via GridSearchCV, improving RMSE from $70.36 (baseline) to $61.81.
        </P>
      </Box>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Python, Jupyter Notebook on Codio</span>
        </ListItem>
        <ListItem>
          <Meta>Goal</Meta>
          <span>Predict listing price (USD) from NYC Airbnb features</span>
        </ListItem>
        <ListItem>
          <Meta>Methods</Meta>
          <span>Log-transform, one-hot, outlier clipping, RF + GridSearchCV</span>
        </ListItem>
        <ListItem>
          <Meta>Best Result</Meta>
          <span>Random Forest → RMSE $61.81, R² 0.5266</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn (RandomForestRegressor, Pipeline, GridSearchCV)</span>
        </ListItem>
        <ListItem>
          <Meta>Future</Meta>
          <span>XGBoost; deploy as API</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/mashcodes10/airbnb-price-prediction/tree/main" target="_blank">
            View on GitHub
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/airbnb/airbnb.png" alt="Airbnb Price Prediction Model" />
    </Container>
  </Layout>
)

export default Work
