import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Box,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const PostModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [title, setTitle] = useState(dataEdit.title || "");
    const [text, setText] = useState(dataEdit.text || "");
  
    const handleSave = () => {
      if (!title || !text) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { title, text };
      }
  
      if (titleAlreadyExists()) {
        return alert("Já existe uma publicação com esse nome!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { title, text };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { title, text }]
        : [...(data ? data : [])];
  
      localStorage.setItem("post", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const titleAlreadyExists = () => {
      if (dataEdit.title !== title && data?.length) {
        return data.find((item) => item.title === title);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nova postagem</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Texto</FormLabel>
                  <Textarea
                    type="text"
                    resize={"none"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Salvar
              </Button>
              <Button colorScheme="gray" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default PostModal;