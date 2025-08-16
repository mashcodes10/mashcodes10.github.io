import { Container, Heading, Box, Text, Button, SimpleGrid, VStack, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoMail, IoCalendar, IoLogoLinkedin, IoLogoGithub, IoTime, IoCheckmarkCircle } from 'react-icons/io5'

const Contact = () => (
  <Layout title="Contact">
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
          Let&apos;s Connect
        </Heading>
      </Box>
      
      <Box
        borderRadius="lg"
        p={6}
        mb={8}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg" mb={4}>
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. 
          Whether you need help with development, have a project in mind, or just want to say hello, 
          I&apos;d love to hear from you!
        </Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          Choose the option that works best for you below.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={8} mb={8}>
        {/* Scheduling Option */}
        <Section delay={0.1}>
          <Box
            borderRadius="lg"
            p={6}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
            border="1px solid"
            borderColor={useColorModeValue('tealBlue.200', 'tealBlue.700')}
          >
            <VStack spacing={4} align="stretch">
              <HStack>
                <Icon as={IoCalendar} color="tealBlue.500" boxSize={6} />
                <Heading size="md">Schedule a Meeting</Heading>
              </HStack>
              
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Book a 30-minute call to discuss your project, get advice, or explore collaboration opportunities.
              </Text>
              
              <VStack spacing={2} align="start" fontSize="sm">
                <HStack>
                  <Icon as={IoTime} color="tealBlue.500" />
                  <Text>30-45 minutes</Text>
                </HStack>
                <HStack>
                  <Icon as={IoCheckmarkCircle} color="tealBlue.500" />
                  <Text>Free consultation</Text>
                </HStack>
                <HStack>
                  <Icon as={IoCheckmarkCircle} color="tealBlue.500" />
                  <Text>Project discussion</Text>
                </HStack>
              </VStack>
              
              <Button
                as="a"
                href="https://calendly.com/mashiurrahman17675/mashter" // Replace with your actual scheduling link
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="tealBlue"
                size="lg"
                leftIcon={<IoCalendar />}
              >
                Schedule Now
              </Button>
            </VStack>
          </Box>
        </Section>

        {/* Email Option */}
        <Section delay={0.2}>
          <Box
            borderRadius="lg"
            p={6}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <VStack spacing={4} align="stretch">
              <HStack>
                <Icon as={IoMail} color="tealBlue.500" boxSize={6} />
                <Heading size="md">Send an Email</Heading>
              </HStack>
              
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Prefer email? Drop me a line with your project details, questions, or just to say hello.
              </Text>
              
              <VStack spacing={2} align="start" fontSize="sm">
                <HStack>
                  <Icon as={IoCheckmarkCircle} color="tealBlue.500" />
                  <Text>Detailed project discussion</Text>
                </HStack>
                <HStack>
                  <Icon as={IoCheckmarkCircle} color="tealBlue.500" />
                  <Text>24-48 hour response time</Text>
                </HStack>
                <HStack>
                  <Icon as={IoCheckmarkCircle} color="tealBlue.500" />
                  <Text>Perfect for complex inquiries</Text>
                </HStack>
              </VStack>
              
              <Button
                as="a"
                href="mailto:mashiur.khan@outlook.com" // Replace with your actual email
                colorScheme="tealBlue"
                variant="outline"
                size="lg"
                leftIcon={<IoMail />}
              >
                Send Email
              </Button>
            </VStack>
          </Box>
        </Section>
      </SimpleGrid>

      {/* Quick Connect Section */}
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
            Quick Connect
          </Heading>
        </Box>
        
        <Box
          borderRadius="lg"
          p={6}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.400')}>
            For quick questions or to follow my work:
          </Text>
          
          <HStack spacing={4} flexWrap="wrap">
            <Button
              as="a"
              href="https://www.linkedin.com/in/mashter/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              colorScheme="tealBlue"
              leftIcon={<IoLogoLinkedin />}
              size="sm"
            >
              LinkedIn
            </Button>
            
            <Button
              as="a"
              href="https://github.com/mashcodes10"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              colorScheme="tealBlue"
              leftIcon={<IoLogoGithub />}
              size="sm"
            >
              GitHub
            </Button>
          </HStack>
        </Box>
      </Section>

      {/* FAQ Section */}
      <Section delay={0.4}>
        <Box 
          display="inline-block" 
          bg={useColorModeValue('tealBlue.50', 'tealBlue.900')} 
          px={2} 
          py={0.5} 
          borderRadius="md"
          mb={6}
        >
          <Heading as="h3" size="md" fontWeight="semibold" color={useColorModeValue('tealBlue.700', 'tealBlue.200')}>
            What to Expect
          </Heading>
        </Box>
        
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.50')}
          >
            <Heading size="sm" mb={2}>Quick Response</Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              I typically respond to emails within 24-48 hours and scheduling requests immediately.
            </Text>
          </Box>
          
          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.50')}
          >
            <Heading size="sm" mb={2}>Project Discussion</Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              We&apos;ll discuss your goals, timeline, budget, and how I can help bring your vision to life.
            </Text>
          </Box>
          
          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.50')}
          >
            <Heading size="sm" mb={2}>Next Steps</Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              If we&apos;re a good fit, I&apos;ll provide a detailed proposal and timeline for your project.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Contact
