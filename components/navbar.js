import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const activeBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  
  return (
    <Button
      as={NextLink}
      href={href}
      variant="ghost"
      size="sm"
      bg={active ? activeBg : 'transparent'}
      color={textColor}
      fontWeight={active ? 'semibold' : 'medium'}
      _hover={{
        bg: hoverBg,
        textDecoration: 'none'
      }}
      _active={{
        transform: 'scale(0.98)'
      }}
      transition="all 0.2s"
      target={target}
      px={3}
      py={2}
      borderRadius="md"
      {...props}
    >
      {children}
    </Button>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const bgColor = useColorModeValue('rgba(240, 231, 219, 0.8)', 'rgba(32, 32, 35, 0.8)')
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      backdropFilter="saturate(180%) blur(20px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      zIndex={1000}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.lg"
        align="center"
        justify="space-between"
        minH="60px"
      >
        {/* Logo */}
        <Flex align="center">
          <Logo />
        </Flex>

        {/* Desktop Navigation */}
        <HStack
          spacing={1}
          display={{ base: 'none', md: 'flex' }}
          flex={1}
          justify="center"
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Radar
          </LinkItem>
          <LinkItem href="/campus" path={path}>
            Campus
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </HStack>

        {/* Right Side Actions */}
        <HStack spacing={2}>
          <Button
            as={NextLink}
            href="https://github.com/mashcodes10/mashter-portfolio"
            target="_blank"
            variant="ghost"
            size="sm"
            leftIcon={<IoLogoGithub />}
            display={{ base: 'none', sm: 'flex' }}
            _hover={{
              bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
            }}
          >
            Source
          </Button>
          
          <IconButton
            as={NextLink}
            href="https://github.com/mashcodes10/mashter-portfolio"
            target="_blank"
            variant="ghost"
            size="sm"
            icon={<IoLogoGithub />}
            display={{ base: 'flex', sm: 'none' }}
            aria-label="GitHub"
            _hover={{
              bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
            }}
          />

          <ThemeToggleButton />

          {/* Mobile Menu */}
          <Box display={{ base: 'block', md: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                size="sm"
                aria-label="Navigation Menu"
                _hover={{
                  bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
                }}
              />
              <MenuList
                bg={useColorModeValue('white', 'gray.800')}
                borderColor={borderColor}
                shadow="xl"
                py={2}
              >
                <MenuItem as={MenuLink} href="/" fontSize="sm" py={2}>
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/works" fontSize="sm" py={2}>
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts" fontSize="sm" py={2}>
                  Radar
                </MenuItem>
                <MenuItem as={MenuLink} href="/campus" fontSize="sm" py={2}>
                  Campus
                </MenuItem>
                <MenuItem as={MenuLink} href="/contact" fontSize="sm" py={2}>
                  Contact
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/mashcodes10/mashter-portfolio"
                  target="_blank"
                  fontSize="sm"
                  py={2}
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
