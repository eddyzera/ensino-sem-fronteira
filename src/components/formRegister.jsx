import { useRef } from 'react'
import { 
    useDisclosure,
    Stack,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement
 } from '@chakra-ui/react'
 import { FaUser, FaKey } from "react-icons/fa"
 import { AiOutlineMail } from "react-icons/ai"

 export default function FormRegister() {

    const btnRef = useRef()

    const { isOpen, onOpen, onClose } = useDisclosure()

     return (
         <>
            <Button 
                ref={btnRef} 
                onClick={onOpen}
                sx={{ 
                    _focus: {
                        outline: 'none'
                    },

                    _hover: {
                        background: 'yellow',
                    },
                    _active: {
                        transform: 'scale(1.3)'
                    }
                }}
                transition="all 0.9s"
                background="blue.50"
            >
                Registrar
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay>
                    <DrawerContent
                        background="blue.50"
                    >
                        <DrawerCloseButton color="yellow" />
                        <DrawerHeader>
                            Crie a sua Conta
                        </DrawerHeader>
                        <DrawerBody>
                            <FormControl>
                                <Stack spacing={4}>
                                    <InputGroup>
                                        <InputLeftElement 
                                            pointerEvents="none"
                                            children={<FaUser color="#132743" />}
                                        />
                                        <Input 
                                            type="text" 
                                            placeholder="Nome do Usuario..." 
                                            background="blue.100"
                                            border="none"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement 
                                            pointerEvents="none"
                                            children={<AiOutlineMail color="#132743" />}
                                        />
                                        <Input 
                                            type="text" 
                                            placeholder="Email do Usuario..." 
                                            background="blue.100"
                                            border="none"
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement 
                                            pointerEvents="none"
                                            children={<FaKey color="#132743" />}
                                        />
                                        <Input 
                                            type="password" 
                                            placeholder="Coloque a sua senha..." 
                                            background="blue.100"
                                            border="none"
                                        />
                                    </InputGroup>

                                    <InputGroup>
                                        <InputLeftElement 
                                            pointerEvents="none"
                                            children={<FaKey color="#132743" />}
                                        />
                                        <Input 
                                            type="password" 
                                            placeholder="Confirme a sua senha..." 
                                            background="blue.100"
                                            border="none"
                                        />
                                    </InputGroup>
                                    <Button
                                        sx={{ 
                                            _focus: {
                                                outline: 'none'
                                            },
                        
                                            _hover: {
                                                background: 'yellow',
                                            },
                                            _active: {
                                                transform: 'scale(1.3)'
                                            }
                                        }}
                                        transition="all 0.9s"
                                        background="blue.100"
                                    >
                                        Enviar
                                    </Button>
                                    <Button
                                        sx={{ 
                                            _focus: {
                                                outline: 'none'
                                            },
                        
                                            _hover: {
                                                filter: 'brightness(80%)',
                                            },
                                            _active: {
                                                transform: 'scale(1.3)'
                                            }
                                        }}
                                        transition="all 0.9s"
                                        background="red"
                                    >
                                        Cancelar
                                    </Button>
                                </Stack>
                            </FormControl>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
         </>
     )
 }