import { useState } from 'react';
import { Container, Text, VStack, HStack, Input, IconButton, Checkbox, StackDivider } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="4xl" mb={4}>Super Duper Fun Task Manager</Text>
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton
            aria-label="Add todo"
            icon={<FaPlus />}
            onClick={handleAddTodo}
          />
        </HStack>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          borderColor="gray.200"
          borderWidth="2px"
          borderRadius="md"
          padding={4}
          width="100%"
          alignItems="stretch"
        >
          {todos.map((todo, index) => (
            <HStack key={index} justifyContent="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              >
                <Text as={todo.completed ? "s" : undefined}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                onClick={() => handleDeleteTodo(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;