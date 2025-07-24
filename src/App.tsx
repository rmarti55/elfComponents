import { ChakraProvider } from '@chakra-ui/provider'
import { Box, Heading, Text } from '@chakra-ui/react'
import { QuantitySelector } from './components/atoms'

function App() {
  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading size="lg" mb={4}>
          e.l.f. Components
        </Heading>
        <Text mb={6}>
          This is the main application. All components will be developed and previewed in Storybook.
        </Text>
        <Box>
          <Text mb={2}>Example QuantitySelector:</Text>
          <QuantitySelector
            quantity={1}
            onDecrease={() => {}}
            onIncrease={() => {}}
          />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
