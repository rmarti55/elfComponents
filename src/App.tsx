import { ChakraProvider } from '@chakra-ui/react'
import { Box, Heading, Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading size="lg" mb={4}>
          e.l.f. Components
        </Heading>
        <Text>
          This is the main application. All components will be developed and previewed in Storybook.
        </Text>
      </Box>
    </ChakraProvider>
  )
}

export default App
