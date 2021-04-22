import { 
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    FormControl,
    InputGroup,
    InputLeftElement,
    Input,
    Box
} from '@chakra-ui/react'
import { FaUser, FaKey } from "react-icons/fa"

export default function LoginFields() {
    return (
        <Popover>
            <PopoverTrigger>
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
                    marginRight="1rem"
                    background="blue.50"
                >
                     Logar
                </Button>
            </PopoverTrigger>
            <PopoverContent
                border="none"
                background="blue.50"
                sx={{
                    _focus: {
                        outline: 'none'
                    }
                }}
            >
                <PopoverArrow border="none" />
                <PopoverCloseButton color="yellow" />
                <PopoverHeader border="none">
                    Faça o seu Login
                </PopoverHeader>
                <PopoverBody>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement 
                                pointerEvents="none"
                                children={<FaUser color="#132743" />}
                            />

                            <Input 
                                border="none" 
                                type="text" 
                                placeholder="seu email..." 
                                background="blue.100"
                                color="white"
                                sx={{
                                    _focus: {
                                        outline: 'none'
                                    }
                                }}
                            />
                        </InputGroup>

                        <InputGroup
                            margin="1rem 0"
                        >
                            <InputLeftElement 
                                pointerEvents="none"
                                children={<FaKey color="#132743" />}
                            />

                            <Input 
                                border="none" 
                                type="password" 
                                placeholder="seu email..." 
                                background="blue.100"
                                color="white"
                                sx={{
                                    _focus: {
                                        outline: 'none'
                                    }
                                }}
                            />
                        </InputGroup>
                        <Box>
                            <Button
                                sx={{ 
                                    _focus: {
                                        outline: 'none'
                                    },
            
                                    _hover: {
                                        background: 'yellow',
                                    },
                                }}
                                transition="all 0.9s"
                                background="blue.100"
                            >
                                Entrar
                            </Button>
                        </Box>
                    </FormControl>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}