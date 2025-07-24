import React from "react";
import { Minus, Plus } from "lucide-react";
import { Box, Button, Text, HStack } from "@chakra-ui/react";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onDecrease,
  onIncrease,
  disabled = false,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid"
      borderColor="gray.300"
      borderRadius="full"
      bg="white"
    >
      <Button
        onClick={onDecrease}
        disabled={disabled || quantity <= 0}
        variant="ghost"
        size="sm"
        w="32px"
        h="32px"
        p="0"
        color="gray.900"
        _hover={{ color: "gray.700" }}
        _disabled={{ color: "gray.300", cursor: "not-allowed" }}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </Button>
      
      <Text
        flex="1"
        textAlign="center"
        fontSize="sm"
        fontWeight="bold"
        color="gray.900"
        px="2"
        fontFamily="Futura, sans-serif"
      >
        {quantity}
      </Text>
      
      <Button
        onClick={onIncrease}
        disabled={disabled}
        variant="ghost"
        size="sm"
        w="32px"
        h="32px"
        p="0"
        color="gray.900"
        _hover={{ color: "gray.700" }}
        _disabled={{ color: "gray.300", cursor: "not-allowed" }}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </Button>
    </Box>
  );
};

export default QuantitySelector; 