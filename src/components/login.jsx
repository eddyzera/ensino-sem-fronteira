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
    Input
} from '@chakra-ui/react'

export default function Login() {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>Logar</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                    Faça o seu Login
                </PopoverHeader>
                <PopoverBody>

                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}