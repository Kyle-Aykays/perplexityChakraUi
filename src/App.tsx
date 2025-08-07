
import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Button,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import {
  Search,
  Mic,
  Globe,
  Settings,
  Paperclip,
  Plus,
  Home,
  Compass,
  FolderOpen,
  Sparkles,
  DollarSign,
  Plane,
  BookOpen,
  TrendingUp,
  Cpu,
  PaintBucket,
  Trophy,
  Clapperboard,
  Users,
  Baby,
  Wrench,
  Heart,
  Calendar,
  MapPin,
  BarChart3,
  CheckSquare,
  FileText,
} from 'lucide-react';

const App = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { isOpen: isLoginOpen, onClose: onLoginClose } = useDisclosure({ defaultIsOpen: true });

  const sidebarItems = [
    {
      id: 'home',
      icon: Home,
      label: 'Home',
      subitems: [
        { icon: DollarSign, label: 'Finance' },
        { icon: Plane, label: 'Travel' },
        { icon: BookOpen, label: 'Academic' }
      ]
    },
    {
      id: 'discover',
      icon: Compass,
      label: 'Discover',
      subitems: [
        { icon: TrendingUp, label: 'Top' },
        { icon: Cpu, label: 'Tech & Science' },
        { icon: DollarSign, label: 'Finance' },
        { icon: PaintBucket, label: 'Arts & Culture' },
        { icon: Trophy, label: 'Sports' },
        { icon: Clapperboard, label: 'Entertainment' }
      ]
    },
    {
      id: 'spaces',
      icon: FolderOpen,
      label: 'Spaces',
      subitems: [
        { icon: Users, label: 'Welcome' },
        { icon: Plus, label: 'Create a Space' }
      ]
    }
  ];

  const quickActions = [
    { icon: BarChart3, label: 'Compare' },
    { icon: Sparkles, label: 'Perplexity 101' },
    { icon: Heart, label: 'Health' },
    { icon: CheckSquare, label: 'Fact Check' },
    { icon: FileText, label: 'Summarize' }
  ];

  return (
    <Box minH="100vh" bg="gray.900" color="white" position="relative" overflow="hidden">
      {/* Main Sidebar */}
      <Box
        position="fixed"
        left={0}
        top={0}
        h="100vh"
        w="64px"
        bg="gray.800"
        borderRight="1px"
        borderColor="gray.700"
        zIndex={30}
      >
        <VStack spacing={0} py={6} align="center">
          {/* Logo */}
          <Box mb={8}>
            <Sparkles size={32} color="#20d4e7" />
          </Box>
          
          {/* Add Button */}
          <IconButton
            aria-label="Add"
            icon={<Plus size={20} />}
            size="sm"
            variant="ghost"
            colorScheme="gray"
            mb={6}
            _hover={{ bg: 'gray.700' }}
          />

          {/* Navigation Items */}
          <VStack spacing={4}>
            {sidebarItems.map((item) => (
              <Box
                key={item.id}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => {
                  // Delay the collapse to allow cursor transition
                  setTimeout(() => {
                    if (!document.querySelector(`[data-section="${item.id}"]`)?.matches(':hover')) {
                      setHoveredSection(null);
                    }
                  }, 100);
                }}
              >
                <VStack spacing={1}>
                  <IconButton
                    aria-label={item.label}
                    icon={<item.icon size={20} />}
                    size="sm"
                    variant="ghost"
                    colorScheme="gray"
                    _hover={{ bg: 'gray.700' }}
                  />
                  <Text fontSize="xs" color="gray.400" textAlign="center">
                    {item.label}
                  </Text>
                </VStack>
                {hoveredSection === item.id && (
                  <Box
                    data-section={item.id}
                    position="absolute"
                    left="64px"
                    top={0}
                    h="100vh"
                    w="256px"
                    bg="gray.800"
                    borderRight="1px"
                    borderColor="gray.700"
                    zIndex={20}
                    transition="all 0.2s"
                    onMouseEnter={() => setHoveredSection(item.id)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        if (!document.querySelector(`[data-section="${item.id}"]`)?.matches(':hover') &&
                            !document.querySelector(`[data-main-section="${item.id}"]`)?.matches(':hover')) {
                          setHoveredSection(null);
                        }
                      }, 100);
                    }}
                    data-main-section={item.id}
                  >
                    <Box p={6}>
                      <VStack align="stretch" spacing={4}>
                        <HStack>
                          <item.icon size={20} />
                          <Text fontSize="lg" fontWeight="medium">
                            {item.label}
                          </Text>
                        </HStack>
                        {item.id === 'home' && (
                          <VStack align="stretch" spacing={1}>
                            <Text fontSize="sm" color="gray.400" mb={3}>
                              Library
                            </Text>
                            <HStack
                              color="gray.400"
                              _hover={{ color: 'white', bg: 'gray.700' }}
                              cursor="pointer"
                              py={2}
                              px={3}
                              borderRadius="lg"
                              transition="all 0.2s"
                            >
                              <Plus size={16} />
                              <Text>Create a Thread</Text>
                            </HStack>
                          </VStack>
                        )}
                        {item.id === 'discover' && (
                          <VStack align="stretch" spacing={1}>
                            <Text fontSize="sm" color="gray.400" mb={3}>
                              Topics
                            </Text>
                            {item.subitems?.map((subitem, index) => (
                              <HStack
                                key={index}
                                color="gray.300"
                                _hover={{ color: 'white', bg: 'gray.700' }}
                                cursor="pointer"
                                py={2}
                                px={3}
                                borderRadius="lg"
                                transition="all 0.2s"
                              >
                                <subitem.icon size={16} />
                                <Text>{subitem.label}</Text>
                              </HStack>
                            ))}
                          </VStack>
                        )}
                        {item.id === 'spaces' && (
                          <VStack align="stretch" spacing={1}>
                            {item.subitems?.map((subitem, index) => (
                              <HStack
                                key={index}
                                color="gray.300"
                                _hover={{ color: 'white', bg: 'gray.700' }}
                                cursor="pointer"
                                py={2}
                                px={3}
                                borderRadius="lg"
                                transition="all 0.2s"
                              >
                                <subitem.icon size={16} />
                                <Text>{subitem.label}</Text>
                              </HStack>
                            ))}
                          </VStack>
                        )}
                      </VStack>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Flex
        ml="64px"
        minH="100vh"
        direction="column"
        align="center"
        justify="center"
        px={8}
      >
        {/* Brand */}
        <Box mb={12}>
          <Text fontSize="6xl" fontWeight="300" letterSpacing="wide" color="white">
            perplexity
          </Text>
        </Box>

        {/* Search Container */}
        <Box w="xxl" maxW="4xl">
          {/* Search Input */}
          <Box position="relative" mb={6}>
            <InputGroup size="lg">
              <InputLeftElement 
                pointerEvents="none" 
                h="60px"
                pl={4}
              >
                <Search size={20} color="#20d4e7" />
              </InputLeftElement>
              
              <Input
                placeholder="Ask anything..."
                variant="perplexity"
                pl="60px"
                pr="200px"
              />
              
              <InputRightElement 
                width="180px" 
                h="60px"
                pr={4}
              >
                <HStack spacing={1}>
                  <Tooltip label="Attachment">
                    <IconButton
                      aria-label="Attachment"
                      icon={<Paperclip size={18} />}
                      size="sm"
                      variant="ghost"
                      colorScheme="gray"
                      color="gray.400"
                      _hover={{ bg: 'gray.700', color: 'white' }}
                    />
                  </Tooltip>
                  
                  <Tooltip label="Globe">
                    <IconButton
                      aria-label="Globe"
                      icon={<Globe size={18} />}
                      size="sm"
                      variant="ghost"
                      colorScheme="gray"
                      color="gray.400"
                      _hover={{ bg: 'gray.700', color: 'white' }}
                    />
                  </Tooltip>
                  
                  <Tooltip label="Settings">
                    <IconButton
                      aria-label="Settings"
                      icon={<Settings size={18} />}
                      size="sm"
                      variant="ghost"
                      colorScheme="gray"
                      color="gray.400"
                      _hover={{ bg: 'gray.700', color: 'white' }}
                    />
                  </Tooltip>
                  
                  <Tooltip label="Microphone">
                    <IconButton
                      aria-label="Microphone"
                      icon={<Mic size={18} />}
                      size="sm"
                      bg="cyan.400"
                      color="white"
                      _hover={{ bg: 'cyan.500' }}
                      borderRadius="full"
                    />
                  </Tooltip>
                </HStack>
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* Quick Action Buttons */}
          <Flex wrap="wrap" gap={3} justify="center">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                leftIcon={<action.icon size={16} />}
                size="sm"
                variant="outline"
                colorScheme="gray"
                bg="gray.800"
                borderColor="gray.600"
                color="gray.300"
                _hover={{ 
                  bg: 'gray.700', 
                  color: 'white',
                  borderColor: 'gray.500'
                }}
                borderRadius="full"
                px={4}
                py={2}
                h="auto"
                fontSize="sm"
              >
                {action.label}
              </Button>
            ))}
          </Flex>
        </Box>
      </Flex>

      {/* Login Panel */}
      {isLoginOpen && (
        <Card
          position="fixed"
          right={6}
          bottom={6}
          w="340px"
          variant="perplexity"
          zIndex={40}
        >
          <CardHeader pb={2}>
            <Flex justify="space-between" align="center">
              <Sparkles size={24} color="#20d4e7" />
              <CloseButton
                size="sm"
                color="gray.400"
                _hover={{ bg: 'gray.700', color: 'white' }}
                onClick={onLoginClose}
              />
            </Flex>
          </CardHeader>
          
          <CardBody pt={0}>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontSize="lg" fontWeight="medium" mb={1} color="white">
                  Sign in or create an account
                </Text>
                <Text fontSize="sm" color="gray.400">
                  Unlock Pro Search and History
                </Text>
              </Box>

              <VStack spacing={3} align="stretch">
                <Button
                  leftIcon={
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  }
                  bg="cyan.400"
                  color="white"
                  _hover={{ bg: 'cyan.500' }}
                  fontWeight="medium"
                  borderRadius="lg"
                  h="48px"
                >
                  Continue with Google
                </Button>

                <Button
                  leftIcon={
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  }
                  bg="gray.700"
                  borderColor="gray.600"
                  color="white"
                  variant="outline"
                  _hover={{ bg: 'gray.600' }}
                  fontWeight="medium"
                  borderRadius="lg"
                  h="48px"
                >
                  Continue with Apple
                </Button>

                <Input
                  placeholder="Enter your email"
                  bg="gray.700"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: 'gray.400' }}
                  _focus={{ borderColor: 'cyan.400' }}
                  borderRadius="lg"
                  h="48px"
                />

                <Button
                  bg="gray.700"
                  color="white"
                  _hover={{ bg: 'gray.600' }}
                  fontWeight="medium"
                  borderRadius="lg"
                  h="48px"
                >
                  Continue with email
                </Button>
              </VStack>

              <Box textAlign="center">
                <Button
                  variant="link"
                  size="sm"
                  color="gray.400"
                  _hover={{ color: 'gray.300' }}
                >
                  Single sign-on (SSO)
                </Button>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      )}
    </Box>
  );
};

export default App;